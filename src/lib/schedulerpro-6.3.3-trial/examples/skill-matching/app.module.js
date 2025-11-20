import shared from '../_shared/shared.module.js';
import { DragHelper, StringHelper, DomHelper, SchedulerPro, DateHelper, Model, EventModel, ResourceModel, Grid } from '../../build/schedulerpro.module.js';
//region "lib/Drag.js"

// Handles dragging unscheduled appointment from the grid onto the schedule
class Drag extends DragHelper {
    static configurable = {
        callOnFunctions      : true,
        autoSizeClonedTarget : false,
        unifiedProxy         : true,
        swapWhenDropOnEvent  : true,
        // Prevent removing proxy on drop, we adopt it for usage in the Schedule
        removeProxyAfterDrop : false,

        // Don't drag the actual row element, clone it
        cloneTarget        : true,
        // Only allow drops on the schedule area
        dropTargetSelector : '.b-timeline-subgrid .b-grid-row:not(.b-group-row),.b-sch-event-wrap',
        // Only allow drag of row elements inside on the unplanned grid
        targetSelector     : '.b-grid-row:not(.b-group-row)'
    };

    afterConstruct() {
        // Configure DragHelper with schedule's scrollManager to allow scrolling while dragging
        this.scrollManager = this.schedule.scrollManager;
    }

    createProxy(grabbedElement, initialXY) {
        const
            { schedule, grid } = this,
            draggedAppointment          = grid.getRecordFromElement(grabbedElement),
            proxy                       = document.createElement('div');

        proxy.style.cssText = '';
        proxy.style.width   = schedule.tickSize - (2 * schedule.resourceMargin) + 'px';
        proxy.style.height  = schedule.rowHeight - (2 * schedule.resourceMargin) + 'px';

        // Fake an event bar
        proxy.classList.add('b-sch-event-wrap', 'b-sch-style-rounded', 'b-sch-horizontal');
        proxy.innerHTML = StringHelper.xss`
            <div class="b-sch-event b-has-content b-sch-event-withicon">
                <div class="b-sch-event-content">
                    <i class="b-icon b-${draggedAppointment.iconCls}"></i>
                    <div>
                        <div>${draggedAppointment.name}</div>
                    </div>
                </div>
            </div>
        `;

        return proxy;
    }

    onDragStart({ context }) {
        const
            me                 = this,
            { schedule, grid } = me,
            { selectedRecord } = grid;

        // save a reference to the task being dragged so we can access them later
        context.task = selectedRecord;
        schedule.enableScrollingCloseToEdges(schedule.timeAxisSubGrid);

        // Prevent tooltips from showing while dragging
        schedule.features.eventTooltip.disabled = true;
    }

    onDrag({ context }) {
        const
            { schedule } = this,
            { task }     = context,
            newStartDate = schedule.getDateFromCoordinate(context.newX, 'round', false),
            technician   = context.target && schedule.resolveResourceRecord(context.target);

        if (!technician) {
            return;
        }

        // Validate the drop position
        context.valid = newStartDate && technician.canPerformTask(task, newStartDate);

        // Save reference to the technician so we can use it in onTaskDrop
        context.technician = technician;
    }

    // Drop callback after a mouse up, take action and transfer the unplanned appointment to the real EventStore (if it's valid)
    async onDrop({ context }) {
        const
            me                 = this,
            { schedule, grid } = me;

        // If drop was done in a valid location, set the startDate and transfer the task to the Scheduler event store
        if (context.valid) {
            const
                { task, element, technician } = context,
                coordinate                    = DomHelper.getTranslateX(element) + (element.offsetWidth / 2),
                dropDate                      = schedule.getDateFromCoordinate(coordinate, 'round', false),
                // We schedule the task on the first available time slot for the day
                firstAvailableDaySlot         = technician.getFirstAvailableTimeSlot(dropDate, task);

            if (firstAvailableDaySlot) {
                await schedule.scheduleEvent({
                    eventRecord    : task,
                    startDate      : firstAvailableDaySlot,
                    // Assign to the technician (resource) it was dropped on
                    resourceRecord : technician,
                    element
                });

                grid.store.remove(task);
            }
            else {
                context.valid = false;
            }
        }

        schedule.disableScrollingCloseToEdges(schedule.timeAxisSubGrid);
        schedule.features.eventTooltip.disabled = false;
    }
}

//endregion

//region "lib/Schedule.js"

// Customized scheduler displaying planned maintenance work for vehicles
class Schedule extends SchedulerPro {
    static $name = 'Schedule';

    static configurable = {
        resourceImagePath : '../_shared/images/users/',
        timeResolution    : {
            magnitude : 1,
            unit      : 'd'
        },
        eventStyle                : 'rounded',
        rowHeight                 : 65,
        barMargin                 : 7,
        tickSize                  : 150,
        fillTicks                 : true,
        eventColor                : 'indigo',
        useInitialAnimation       : false,
        zoomOnMouseWheel          : false,
        zoomOnTimeAxisDoubleClick : false,
        title                     : 'Planned maintenance activities',
        ui                        : 'toolbar',
        autoCreate                : {
            useEventModelDefaults : true
        },
        features : {
            scheduleMenu      : false,
            eventDragCreate   : false,
            dependencies      : false,
            calendarHighlight : {
                calendar : 'resource',
                inflate  : {
                    x : -8,
                    y : -1
                },
                collectAvailableResources({ scheduler, eventRecords }) {
                    return scheduler.resourceStore.query(technician => technician.canPerformTask(eventRecords[0]));
                }
            },
            scheduleTooltip : false,
            columnLines     : true,
            group           : {
                field        : 'type',
                headerHeight : 45,
                showCount    : false
            },
            resourceNonWorkingTime : {
                enableMouseEvents : true
            },
            filterBar : {
                compactMode : true
            },
            // Configure event menu items with correct phrases (could also be done through localization)
            eventMenu : {
                items : {
                    splitEvent : false,
                    unassign   : {
                        icon : 'b-fa b-fa-calendar-xmark',
                        text : 'Move to unplanned list',
                        onItem({ eventRecord }) {
                            const { project } = eventRecord;
                            eventRecord.remove();

                            project.getCrudStore('unplanned').add(eventRecord);
                        }
                    }
                }
            },
            eventResize : false,
            eventDrag   : {
                tooltipTemplate : ({ eventRecord, startDate, newResource }) => {
                    const firstAvailableTimeSlot = newResource.isSpecialRow ? null : newResource.getFirstAvailableTimeSlot(startDate, eventRecord);

                    return `<div class="b-tooltip-section">
                        <strong><i class="b-icon b-fa-calendar-days"'}"></i>Schedule on</strong>
                        ${DateHelper.format(startDate, 'MMM DD')}
                    </div>
                    <div class="b-tooltip-section">
                        <strong><i class="b-fa b-fa-tools"'}"></i>Required skills</strong>
                        <ul class="skills">
                            ${eventRecord.requiredSkillRecords.map(skillRecord => `<li><i class="b-icon b-fa-${newResource.skills?.includes?.(skillRecord.id) ? 'check' : 'xmark'}"></i>${StringHelper.encodeHtml(skillRecord.name)}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="b-tooltip-section">
                        <strong><i class="b-icon b-fa-clock"'}"></i>Resource availability</strong>
                        <i class="b-icon b-fa-${firstAvailableTimeSlot ? 'check' : 'xmark'}"></i> ${firstAvailableTimeSlot ? DateHelper.format(firstAvailableTimeSlot, 'LST') : 'No availability'}
                    </div>
                    `;
                },
                // Validation method, called as you drag events around in the schedule
                validatorFn({ eventRecords, newResource, startDate }) {
                    const
                        task  = eventRecords[0],
                        valid = newResource.canPerformTask(task, startDate);

                    return valid;
                }
            },
            eventTooltip : {
                template({ eventRecord }) {
                    return `<div class="field"><label>Task</label><span>${StringHelper.encodeHtml(eventRecord.name)}</span></div>
                        <div class="field"><label>Required skills</label><ul class="skills">${eventRecord.requiredSkillNames.map(skill => `<li>${skill}</li>`).join('')}</ul></div>
                        <div class="field"><label>Start</label><span>${DateHelper.format(eventRecord.startDate, 'MMM DD LST')}</span></div>
                        <div class="field"><label>Duration</label><span>${eventRecord.fullDuration}</span></div>
                        <div class="field"><label>Assigned to</label><span>${StringHelper.encodeHtml(eventRecord.resource.name)}</span></div>
                        <div class="field"><label>Completed</label><span></span></div>
                    `;
                }
            },
            taskEdit : {
                editorConfig : {
                    title : 'Task'
                },

                // Add items to the General tab
                items : {
                    generalTab : {
                        items : {
                            resourcesField : {
                                label : 'Technician'
                            },
                            effortField  : false,
                            // Add a vehicle field
                            vehicleField : {
                                type   : 'text',
                                name   : 'licensePlate',
                                label  : 'Vehicle',
                                // Place after name field
                                weight : 150
                            },
                            skillField : {
                                type         : 'combo',
                                multiSelect  : true,
                                idField      : 'id',
                                displayField : 'name',
                                label        : 'Skills',
                                name         : 'skills',
                                weight       : 160
                            }
                        }
                    }
                }
            }
        },

        // Define the columns to use
        columns : [
            {
                type           : 'resourceInfo',
                text           : 'Staff',
                width          : 300,
                showEventCount : false,
                // Show skills each technician has
                showMeta(resourceRecord) {
                    const
                        { skillNames }         = resourceRecord,
                        { startDate, endDate } = this.grid,
                        bookedHours            = resourceRecord.getBookedHours(startDate, endDate),
                        overAllocated          = bookedHours > resourceRecord.hoursPerWeek;

                    return `<ul class="skills">${skillNames.map(skill => `<li>${StringHelper.encodeHtml(skill)}</li>`).join('')}</ul>
                        <div data-btip="${bookedHours}h / ${resourceRecord.hoursPerWeek} allocated"><i class="b-fa ${overAllocated ? 'b-fa-triangle-exclamation' : 'b-fa-clock'}"></i>${bookedHours} / ${resourceRecord.hoursPerWeek}</div>`;
                },
                filterable : {
                    filterField : {
                        triggers : {
                            search : {
                                cls : 'b-icon b-fa-filter'
                            }
                        },
                        placeholder : 'Staff'
                    }
                }
            }
        ],

        // Custom view preset with single header row configuration
        viewPreset : {
            base      : 'dayAndWeek',
            shiftUnit : 'week',
            headers   : [
                {
                    unit       : 'd',
                    align      : 'center',
                    dateFormat : 'ddd DD'
                }
            ]
        },

        // navigation buttons
        tools : [
            {
                type     : 'button',
                icon     : 'b-icon b-fa-chevron-left',
                cls      : 'b-transparent',
                onAction : 'up.onPreviousWeekClick'
            },
            {
                type     : 'button',
                text     : 'Today',
                cls      : 'b-transparent',
                onAction : 'up.onTodayClick'
            },
            {
                type     : 'button',
                icon     : 'b-icon b-fa-chevron-right',
                cls      : 'b-transparent',
                onAction : 'up.onNextWeekClick'
            },
            {
                type     : 'button',
                text     : 'Auto-schedule',
                icon     : 'b-icon b-fa-wand-magic-sparkles',
                cls      : 'b-transparent',
                tooltip  : 'Tries to fit the unplanned events into the currently displayed timeframe',
                onAction : 'up.onAutoScheduleClick'
            }
        ],

        onNextWeekClick() {
            this.shiftNext();
        },

        onTodayClick() {
            this.scrollToDate(new Date());
        },

        onPreviousWeekClick() {
            this.shiftPrevious();
        },

        async onAutoScheduleClick() {
            const unplannedStore = this.project.getCrudStore('unplanned');

            this.suspendRefresh();

            // Basic implementation of assigning unplanned tasks to available resources
            for (let i = unplannedStore.count - 1; i >= 0; --i) {
                const eventRecord = unplannedStore.getAt(i);

                this.resourceStore.forEach(technicianRecord => {
                    if (technicianRecord.hoursPerWeek - technicianRecord.getBookedHours(this.startDate, this.endDate) < eventRecord.duration) {
                        return;
                    }
                    this.timeAxis.forEach(({ startDate })  => {
                        startDate = technicianRecord.getFirstAvailableTimeSlot(startDate, eventRecord);
                        if (startDate && technicianRecord.canPerformTask(eventRecord, startDate)) {
                            eventRecord.remove();
                            this.scheduleEvent({
                                eventRecord,
                                startDate,
                                resourceRecord : technicianRecord
                            });
                            return false;
                        }
                    });
                    return eventRecord.resources.length === 0;
                }, undefined, { includeCollapsedGroupRecords : true });

                await this.project.commitAsync();
            }
            this.resumeRefresh();
        }
    };

    construct() {
        super.construct(...arguments);

        // Populate the skills combo in the event editor
        this.features.taskEdit.items.generalTab.items.skillField.store = this.project.getCrudStore('skills');
    }

    // Return a DOM config object for what to show inside the event bar (you can return an HTML string too)
    eventRenderer({ eventRecord }) {
        return [
            {
                class    : 'b-event-header',
                children : [{
                    class : 'b-event-name',
                    text  : eventRecord.name
                },
                {
                    class : 'b-event-duration',
                    text  : eventRecord.fullDuration.toString(true)
                }]
            },
            {
                class : 'licensePlate',
                html  : StringHelper.xss`<div>Vehicle: ${eventRecord.licensePlate}</div>`
            }
        ];
    }

    // Remove highlights on days when there already are events
    onBeforeRenderCalendarHighlights(event) {
        const { events, highlights } = event;

        if (events.length) {
            event.highlights = highlights.filter(h => !events.some(e => DateHelper.isEqual(e.startDate, h.startDate, 'day')));
        }
    }

    getResourceImage(resource) {
        return this.resourceImagePath + (resource.image !== false ? StringHelper.encodeHtml(resource.name.toLowerCase() + '.jpg') : 'none.png');
    }

    onBeforeEventEditShow({ editor, eventRecord }) {
        editor.widgetMap.vehicleField.readOnly = !eventRecord.isCreating;
    }
}

//endregion

//region "lib/Skill.js"

class Skill extends Model {
    static fields = [
        // Add additional Skill related fields here
        'name'
    ];
}

//endregion

//region "lib/Task.js"

// Custom Task model, based on EventModel with additional fields and changed defaults
class Task extends EventModel {
    static fields = [
        { name : 'iconCls', defaultValue : 'b-fa b-fa-bus' },
        { name : 'licensePlate', defaultValue : '' },
        // The skills required to perform a task
        { name : 'skills', type : 'array' },
        { name : 'duration', defaultValue : 1 },
        { name : 'durationUnit', defaultValue : 'h' }
    ];

    get requiredSkillRecords() {
        const skillStore = this.firstStore.crudManager.getCrudStore('skills');
        return this.skills?.map(id => skillStore.getById(id)) || [];
    }

    get requiredSkillNames() {
        const skillStore = this.firstStore.crudManager.getCrudStore('skills');
        return this.skills?.map(id => skillStore.getById(id).name) || [];
    }
}

//endregion

//region "lib/Technician.js"

// Custom Technician resource model, based on ResourceModel with additional fields
class Technician extends ResourceModel {
    static fields = [
        // The skills will be matched against the "skills" field of Tasks
        { name : 'skills', type : 'array' },
        'type',
        { name : 'hoursPerWeek', defaultValue : 40 }
    ];

    getBookedHours(startDate, endDate) {
        let total = 0;
        this.events.forEach(eventRecord => {
            if (DateHelper.intersectSpans(eventRecord.startDate, eventRecord.endDate, startDate, endDate)) {
                total += eventRecord.duration;
            }
        });

        return total;
    }

    canPerformTask(taskRecord, startDate) {
        const
            {
                skills : requiredSkills,
                calendar
            }                     = taskRecord,
            endDate               = startDate && DateHelper.add(startDate, taskRecord.duration, taskRecord.durationUnit),
            skillsMatch           = !requiredSkills || requiredSkills.every(skillId => this.skills?.includes(skillId)),
            hasEnoughAvailability = Boolean(!startDate || this.getFirstAvailableTimeSlot(startDate, taskRecord));

        return skillsMatch && (!startDate || (
            // Respect technician working time
            (!calendar || calendar.isWorkingTime(startDate, endDate, true)))) &&
            hasEnoughAvailability;
    }

    get skillNames() {
        const skillStore = this.project.getCrudStore('skills');
        return this.skills?.map(id => skillStore.getById(id).name) || '';
    }

    getEventsForDay(date) {
        return this.getEventsInRange(date, DateHelper.add(date, 1, 'day'));
    }

    getEventsInRange(startDate, endDate) {
        return this.events.filter(eventRecord => DateHelper.intersectSpans(startDate, endDate, eventRecord.startDate, eventRecord.endDate));
    }

    getFirstAvailableTimeSlot(date, taskRecord) {
        date = DateHelper.clearTime(date);

        const availabilityRange = this.effectiveCalendar.getWorkingTimeRanges(date, DateHelper.add(date, 1, 'day'))[0];

        if (availabilityRange) {
            let eventsOnDate = this.getEventsForDay(date);

            if (DateHelper.isSameDate(taskRecord.startDate, date)) {
                eventsOnDate = eventsOnDate.filter(ev => ev !== taskRecord);
            }

            const
                nextStartSlot          = eventsOnDate[eventsOnDate.length - 1]?.endDate || availabilityRange.startDate,
                remainingAvailableTime = availabilityRange.endDate - nextStartSlot;

            if (remainingAvailableTime >= taskRecord.durationMS) {
                return nextStartSlot;
            }
        }
    }
}

//endregion

//region "lib/UnplannedGrid.js"

// Custom grid that displays unplanned maintenance tasks
class UnplannedGrid extends Grid {
    static configurable = {
        hideHeaders                : true,
        rowHeight                  : 65,
        disableGridRowModelWarning : true,
        collapsible                : true,
        flex                       : '0 0 300px',
        ui                         : 'toolbar',
        title                      : 'Unplanned maintenance',
        emptyText                  : 'No unplanned maintenance',
        selectionMode              : {
            multiSelect : false
        },
        features : {
            stripe : true,
            sort   : 'name'
        },

        columns : [
            {
                flex       : 1,
                field      : 'name',
                cellCls    : 'unscheduledNameCell',
                htmlEncode : false,
                renderer   : ({ record : task }) => `
                        <div class="vehicle-ct">
                            <i class="${StringHelper.encodeHtml(task.iconCls) || ''}"></i>
                            <span class="licensePlate">${StringHelper.encodeHtml(task.licensePlate)}</span>
                        </div>
                        <div class="name-container">
                            <div class="main-info"><span class="task-name">${StringHelper.encodeHtml(task.name)}</span></div>
                            <div class="meta-info"><ul class="skills">${task.requiredSkillNames.map(skill => `<li data-btip="This task requires a technician with the following skills: <strong>${task.requiredSkillNames.join(', ')}</strong>">${skill}</li>`).join('')}</ul><span class="duration">${task.duration ? task.duration + 'h' : ''}</span></div>
                        </div>
                    `
            }
        ]
    };

    static $name = 'UnplannedGrid';
}

//endregion

// Displays planned sessions
const schedule = new Schedule({
    ref       : 'schedule',
    appendTo  : 'main',
    startDate : new Date(2024, 10, 4),
    endDate   : new Date(2024, 10, 9),
    flex      : 1,

    project : {
        autoLoad      : true,
        resourceStore : {
            modelClass : Technician,
            sorters    : [{ field : 'name', ascending : true }]
        },
        eventStore : {
            modelClass : Task
        },
        loadUrl    : 'data/data.json',
        crudStores : [
            {
                id         : 'skills',
                modelClass : Skill
            },
            {
                id                  : 'unplanned',
                modelClass          : Task,
                reapplySortersOnAdd : true
            }
        ]
    }
});

// Holds unplanned sessions, that can be dragged to the schedule
const unplannedGrid = new UnplannedGrid({
    ref         : 'unplanned',
    flex        : '0 1 400px',
    collapsible : true,
    appendTo    : 'main',
    store       : schedule.project.getCrudStore('unplanned'),
    listeners   : {
        selectionChange() {
            schedule.highlightResourceCalendarsForEventRecords(this.selectedRecords);
        }
    }
});

// Handles dragging
const drag = new Drag({
    grid         : unplannedGrid,
    schedule,
    constrain    : false,
    outerElement : unplannedGrid.element
});
