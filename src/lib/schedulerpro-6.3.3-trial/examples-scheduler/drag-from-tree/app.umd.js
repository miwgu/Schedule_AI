var {
    DateHelper,
    DragHelper,
    DomHelper,
    Toast,
    Tooltip,
    Combo,
    Scheduler,
    SchedulerEventModel,
    TreeGrid,
    Splitter
} = window.bryntum.schedulerpro;
//region "lib/Drag.js"

class Drag extends DragHelper {
    static configurable = {
        callOnFunctions      : true,
        // Don't drag the actual row element, clone it
        cloneTarget          : true,
        // We size the cloned element manually
        autoSizeClonedTarget : false,
        // Only allow drops on the schedule area
        dropTargetSelector   : '.b-timeline-subgrid',
        // Only allow drag of leaf row elements inside on the unplanned tree grid
        targetSelector       : '.b-grid-row:not(.b-tree-parent-row)'
    };
    createProxy(element) {
        const proxy = document.createElement('div'),
            {
                schedule
            } = this,
            task = this.grid.getRecordFromElement(element),
            durationInPx = schedule.timeAxisViewModel.getDistanceForDuration(task.rawDurationMS);

        // Fake an event bar
        proxy.classList.add('b-sch-event-wrap', 'b-sch-event', 'b-unassigned-class', `b-sch-${schedule.mode}`);
        proxy.innerHTML = `<div class="b-sch-event b-has-content b-sch-event-withicon">
            <div class="b-sch-event-content">
                <i class="${task.iconCls}"></i> ${task.name}
            </div>
        </div>`;
        if (schedule.isHorizontal) {
            proxy.style.height = `${schedule.rowHeight - 2 * schedule.resourceMargin}px`;
            proxy.style.width = `${durationInPx}px`;
        }
        else {
            proxy.style.height = `${durationInPx}px`;
            proxy.style.width = `${schedule.resourceColumnWidth}px`;
        }
        return proxy;
    }
    onDragStart({
        context
    }) {
        const me = this,
            {
                schedule
            } = me,
            {
                eventTooltip,
                eventDrag
            } = schedule.features;

        // save a reference to the task so we can access it later
        context.task = me.grid.getRecordFromElement(context.grabbed);

        // Prevent tooltips from showing while dragging
        eventTooltip.disabled = true;
        schedule.enableScrollingCloseToEdges(schedule.timeAxisSubGrid);
        if (eventDrag.showTooltip && !me.tip) {
            me.tip = new Tooltip({
                align      : 'b-t',
                forElement : context.element,
                cls        : 'b-popup b-sch-event-tooltip'
            });
        }
    }
    onDrag({
        event,
        context
    }) {
        const me = this,
            {
                schedule
            } = me,
            {
                task
            } = context,
            coordinate = DomHelper[`getTranslate${schedule.isHorizontal ? 'X' : 'Y'}`](context.element),
            startDate = schedule.getDateFromCoordinate(coordinate, 'round', false, true),
            endDate = startDate && DateHelper.add(startDate, task.duration, task.durationUnit),
            // Coordinates required when used in vertical mode, since it does not use actual columns
            resource = context.target && schedule.resolveResourceRecord(context.target, [event.offsetX, event.offsetY]);

        // Don't allow drops anywhere, only allow drops if the drop is on the timeaxis and on top of a Resource
        context.valid = Boolean(startDate && resource) && (schedule.allowOverlap || schedule.isDateRangeAvailable(startDate, endDate, null, resource));
        if (context.resource) {
            schedule.getRowFor(context.resource).removeCls('target-resource');
        }
        if (startDate && resource) {
            schedule.getRowFor(resource).addCls('target-resource');
        }

        // Save reference to resource so we can use it in onTaskDrop
        context.resource = resource;
        context.startDate = startDate;
        if (me.tip && context.valid) {
            const dateFormat = schedule.displayDateFormat,
                formattedStartDate = DateHelper.format(startDate, dateFormat),
                formattedEndDate = DateHelper.format(endDate, dateFormat);
            me.tip.html = `
                <div class="b-sch-event-title">${task.name}</div>
                <div class="b-sch-tooltip-startdate">Starts: ${formattedStartDate}</div>
                <div class="b-sch-tooltip-enddate">Ends: ${formattedEndDate}</div>
            `;
            me.tip.showBy(context.element);
        }
        else {
            var _me$tip;
            (_me$tip = me.tip) === null || _me$tip === undefined || _me$tip.hide();
        }
    }

    // Drop callback after a mouse up, take action and transfer the unplanned task to the real SchedulerEventStore (if it's valid)
    onDrop({
        context,
        event
    }) {
        var _me$tip2;
        const me = this,
            {
                schedule
            } = me,
            {
                task,
                target,
                resource,
                valid,
                element,
                startDate
            } = context;
        (_me$tip2 = me.tip) === null || _me$tip2 === undefined || _me$tip2.hide();
        schedule.disableScrollingCloseToEdges(me.schedule.timeAxisSubGrid);

        // If drop was done in a valid location, set the startDate and transfer the task to the Scheduler event store
        if (valid && target && startDate) {
            // Try resolving event record from target element, to determine if drop was on another event
            const targetEventRecord = schedule.resolveEventRecord(target);

            // Remove from grid first so that the data change
            // below does not fire events into the grid.
            me.grid.store.remove(task);
            task.startDate = startDate;
            task.assign(resource);
            schedule.eventStore.add(task);

            // Dropped on a scheduled event, display toast
            if (targetEventRecord) {
                Toast.show(`Dropped on ${targetEventRecord.name}`);
            }
        }
        if (resource) {
            schedule.getRowFor(resource).removeCls('target-resource');
        }
        schedule.features.eventTooltip.disabled = false;
    }
    onAbort({
        context
    }) {
        var _this$tip;
        if (context.resource) {
            var _this$schedule$getRow;
            (_this$schedule$getRow = this.schedule.getRowFor(context.resource)) === null || _this$schedule$getRow === undefined || _this$schedule$getRow.removeCls('target-resource');
        }
        (_this$tip = this.tip) === null || _this$tip === undefined || _this$tip.hide();
    }
}

//endregion

//region "lib/IconCombo.js"

// Custom combo containing icons to pick from
class IconCombo extends Combo {
    static type = 'iconcombo';
    static configurable = {
        cls    : 'b-icon-combo',
        picker : {
            cls : 'b-icon-combo-picker'
        },
        items : [{
            value : 'b-fa b-fa-fw b-fa-arrow-up',
            text  : 'Arrow up'
        }, {
            value : 'b-fa b-fa-fw b-fa-asterisk',
            text  : 'Asterisk'
        }, {
            value : 'b-fa b-fa-fw b-fa-beer',
            text  : 'Beer'
        }, {
            value : 'b-fa b-fa-fw b-fa-book',
            text  : 'Book'
        }, {
            value : 'b-fa b-fa-fw b-fa-bug',
            text  : 'Bug'
        }, {
            value : 'b-fa b-fa-fw b-fa-building',
            text  : 'Building'
        }, {
            value : 'b-fa b-fa-fw b-fa-code',
            text  : 'Code'
        }, {
            value : 'b-fa b-fa-fw b-fa-coffee',
            text  : 'Coffee'
        }, {
            value : 'b-fa b-fa-fw b-fa-cog',
            text  : 'Cog'
        }, {
            value : 'b-fa b-fa-fw b-fa-database',
            text  : 'Database'
        }, {
            value : 'b-fa b-fa-fw b-fa-dumbbell',
            text  : 'Dumbbell'
        }, {
            value : 'b-fa b-fa-fw b-fa-keyboard',
            text  : 'Keyboard'
        }, {
            value : 'b-fa b-fa-fw b-fa-laptop',
            text  : 'Laptop'
        }, {
            value : 'b-fa b-fa-fw b-fa-laptop-code',
            text  : 'Laptop code'
        }, {
            value : 'b-fa b-fa-fw b-fa-lock',
            text  : 'Lock'
        }, {
            value : 'b-fa b-fa-fw b-fa-phone',
            text  : 'Phone'
        }, {
            value : 'b-fa b-fa-fw b-fa-plane',
            text  : 'Plane'
        }, {
            value : 'b-fa b-fa-fw b-fa-power-off',
            text  : 'Power off'
        }, {
            value : 'b-fa b-fa-fw b-fa-question',
            text  : 'Question'
        }, {
            value : 'b-fa b-fa-fw b-fa-life-ring',
            text  : 'Ring'
        }, {
            value : 'b-fa b-fa-fw b-fa-server',
            text  : 'Server'
        }, {
            value : 'b-fa b-fa-fw b-fa-sync',
            text  : 'Sync'
        }, {
            value : 'b-fa b-fa-fw b-fa-user',
            text  : 'User'
        }, {
            value : 'b-fa b-fa-fw b-fa-users',
            text  : 'Users'
        }, {
            value : 'b-fa b-fa-fw b-fa-video',
            text  : 'Video'
        }],
        listItemTpl : item => `<i class="${item.value}"></i>${item.text}`
    };
    syncInputFieldValue(...args) {
        this.icon.className = this.value;
        super.syncInputFieldValue(...args);
    }
    get innerElements() {
        return [{
            reference : 'icon',
            tag       : 'i',
            className : 'b-fa b-fa-cog'
        }, ...super.innerElements];
    }
}

// Register class to be able to create widget by type
IconCombo.initClass();

//endregion

//region "lib/Schedule.js"

class Schedule extends Scheduler {
    // Original class name getter. See Widget.$name docs for the details.
    static $name = 'Schedule';

    // Factoryable type name
    static type = 'schedule';
    static configurable = {
    // Custom property for this demo, set to true to reschedule any conflicting tasks automatically
        eventStyle     : 'colored',
        subGridConfigs : {
            locked : {
                maxWidth : 300,
                flex     : 1
            },
            normal : {
                flex : 2
            }
        },
        features : {
            stripe     : true,
            timeRanges : true,
            eventMenu  : {
                items : {
                    // Custom item with inline handler
                    unassign : {
                        text   : 'Unassign',
                        icon   : 'b-fa b-fa-user-times',
                        weight : 200,
                        onItem : ({
                            eventRecord
                        }) => eventRecord.unassign()
                    }
                }
            },
            eventEdit : {
                items : {
                    // Custom field for picking icon
                    iconCls : {
                        type   : 'iconcombo',
                        // Name should match a record field, to read and write value from that field
                        name   : 'iconCls',
                        label  : 'Icon',
                        weight : 200
                    }
                }
            }
        },
        rowHeight  : 50,
        barMargin  : 4,
        eventColor : 'indigo',
        columns    : [{
            type           : 'resourceInfo',
            text           : 'Name',
            flex           : 1,
            minWidth       : 200,
            showEventCount : false,
            showRole       : true
        }, {
            text     : 'Nbr tasks',
            editor   : false,
            renderer : data => `${data.record.events.length || ''}`,
            align    : 'center',
            sortable : (a, b) => a.events.length < b.events.length ? -1 : 1,
            maxWidth : 70
        }],
        // Custom view preset with header configuration
        viewPreset : {
            base           : 'hourAndDay',
            columnLinesFor : 0,
            headers        : [{
                unit       : 'd',
                align      : 'center',
                dateFormat : 'ddd DD MMM'
            }, {
                unit       : 'h',
                align      : 'center',
                dateFormat : 'HH'
            }]
        },
        // Only used in vertical mode
        resourceColumns : {
            columnWidth : 120
        },
        // Do not remove event when unassigning, we want to add it to grid instead
        removeUnassignedEvent : false,
        resourceImagePath     : '../_shared/images/users/'
    };
}
Schedule.initClass();

//endregion

//region "lib/Task.js"

class Task extends SchedulerEventModel {
    static $name = 'Task';
    static defaults = {
    // In this demo, default duration for tasks will be hours (instead of days)
        durationUnit : 'h',
        // Use a default name, for better look in the grid if unassigning a new event
        name         : 'New event',
        // Use a default icon also
        iconCls      : 'b-fa b-fa-asterisk'
    };
}

//endregion

//region "lib/UnplannedTreeGrid.js"

class UnplannedTreeGrid extends TreeGrid {
    // Original class name getter. See Widget.$name docs for the details.
    static $name = 'UnplannedTreeGrid';

    // Factoryable type name
    static type = 'unplannedtreegrid';
    static configurable = {
        features : {
            stripe : true,
            sort   : 'name'
        },
        columns : [{
            type     : 'tree',
            text     : 'Name',
            flex     : 1,
            field    : 'name',
            minWidth : 200
        }, {
            type  : 'duration',
            text  : 'Duration',
            width : 90
        }],
        rowHeight : 50
    };
}

// Register this widget type with its Factory
UnplannedTreeGrid.initClass();

//endregion

const schedule = new Schedule({
    ref         : 'schedule',
    insertFirst : 'main',
    startDate   : new Date(2025, 11, 1, 8),
    endDate     : new Date(2025, 11, 1, 18),
    flex        : 4,
    crudManager : {
        autoLoad   : true,
        eventStore : {
            modelClass : Task
        },
        loadUrl : 'data/data.json'
    },
    tbar : ['Schedule view']
});
new Splitter({
    appendTo    : 'main',
    showButtons : 'end'
});
const unplannedGrid = new UnplannedTreeGrid({
    ref         : 'unplanned',
    appendTo    : 'main',
    title       : 'Unplanned Tasks',
    collapsible : true,
    flex        : '0 0 350px',
    ui          : 'toolbar',
    // Schedulers stores are contained by a project, pass it to the tree grid to allow it to access them
    project     : schedule.project,
    store       : {
        modelClass : Task,
        readUrl    : 'data/unplanned.json',
        autoLoad   : true
    }
});
const drag = new Drag({
    grid         : unplannedGrid,
    schedule,
    constrain    : false,
    outerElement : unplannedGrid.element
});
schedule.assignmentStore.on({
    // When a task is unassigned move it back to the unplanned tasks tree
    remove({
        records
    }) {
        records.forEach(({
            event
        }) => {
            schedule.eventStore.remove(event);
            unplannedGrid.store.add(event);
        });
    }
});