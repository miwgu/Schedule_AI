import { DomHelper, DateHelper, DragHelper, Grid, SchedulerPro, ScrollManager, StringHelper, TimeAxisViewModel, ResourceModel, type DragHelperListenersTypes, SchedulerResourceModel, SchedulerEventModel, CalendarModel } from '@bryntum/schedulerpro';
import { type DragDropContext } from './Types';
import Task from './Task';

export default class Drag extends DragHelper {
    declare scrollManager: ScrollManager;
    declare schedule: SchedulerPro;
    declare grid: Grid;
    declare timeAxisViewModel: TimeAxisViewModel;
    declare context: DragDropContext;

    static get configurable() {
        return {
            callOnFunctions      : true,
            autoSizeClonedTarget : false,
            unifiedProxy         : true,

            // Prevent removing proxy on drop, we adopt it for usage in the Schedule
            removeProxyAfterDrop : false,

            // Don't drag the actual row element, clone it
            cloneTarget        : true,
            // Only allow drops on the schedule area
            dropTargetSelector : '.b-timeline-subgrid',
            // Only allow drag of row elements inside on the unplanned grid
            targetSelector     : '.b-grid-row:not(.b-group-row)'
        };
    }

    afterConstruct = () => {
        // Configure DragHelper with schedule's scrollManager to allow scrolling while dragging
        this.scrollManager = this.schedule.scrollManager as ScrollManager;
    };

    override createProxy = (grabbedElement: HTMLElement) => {
        const
            { context, schedule, grid } = this,
            { timeAxisViewModel }       = schedule,
            draggedTask                 = grid.getRecordFromElement(grabbedElement) as Task,
            durationInPixels            = timeAxisViewModel.getDistanceForDuration(draggedTask.durationMS),
            proxy                       = document.createElement('div'),
            preambleWidth               = timeAxisViewModel.getDistanceForDuration(draggedTask.preamble.milliseconds),
            postambleWidth              = timeAxisViewModel.getDistanceForDuration(draggedTask.postamble.milliseconds);

        proxy.classList.add('b-sch-horizontal', 'b-eventbuffer');

        // Fake an event bar
        proxy.innerHTML = StringHelper.xss`
            <div class="b-sch-event-wrap b-sch-color-gray b-sch-style-border b-unassigned-class b-sch-horizontal b-eventbuffer ${schedule.timeAxisSubGrid.width < durationInPixels ? 'b-exceeds-axis-width' : '' }" role="presentation" style="width:${durationInPixels + preambleWidth + postambleWidth}px;max-width:${schedule.timeAxisSubGrid.width}px;height:${schedule.rowHeight - 2 * (schedule.resourceMargin as number)}px">
                <div class="b-sch-event-buffer b-sch-event-buffer-before" role="presentation" style="width: ${preambleWidth}px;"><span class="b-buffer-label" role="presentation">${draggedTask.preamble.toString()}</span></div>    
                <div class="b-sch-event-buffer b-sch-event-buffer-after" role="presentation" style="width: ${postambleWidth}px;"><span class="b-buffer-label" role="presentation">${draggedTask.postamble.toString()}</span></div>    
                <div class="b-sch-event b-has-content b-sch-event-withicon">
                    <div class="b-sch-event-content">
                        <span class="event-name">${draggedTask.name}</span>
                        <span class="location"> <i class="b-fa b-fa-map-marker-alt"></i>${draggedTask.shortAddress || ''}</span>
                    </div>
                </div>
            </div>
        `;

        context.totalDuration = grid.selectedRecords.reduce((total: number, task) => total + (task as Task).duration, 0);

        return proxy;
    };

    override onDragStart : DragHelperListenersTypes['dragStart'] = ({ context }) => {
        const
            me                 = this,
            { schedule, grid } = me,
            task               = grid.getRecordFromElement(context.grabbed) as Task;

        (context as DragDropContext).task = task;
        schedule.enableScrollingCloseToEdges(schedule.timeAxisSubGrid);

        // Prevent tooltips from showing while dragging
        schedule.features.eventTooltip.disabled = true;
    };

    override onDrag : DragHelperListenersTypes['drag'] = ({ context : ctx }) => {

        const
            context                 = ctx as DragDropContext,
            { schedule }            = this,
            { task, totalDuration } = context,
            newStartDate            = schedule.getDateFromCoordinate(context.newX, 'round'),
            endDate                 = newStartDate && DateHelper.add(newStartDate, totalDuration, task?.durationUnit),
            resourceRecord          = context.target && schedule.resolveResourceRecord(context.target) as ResourceModel,
            calendar                = resourceRecord?.effectiveCalendar as unknown as CalendarModel;

        // Only allow drops on the timeaxis
        context.valid = Boolean(resourceRecord && newStartDate &&
            // Ensure we don't break allowOverlap config
            (schedule.allowOverlap || schedule.isDateRangeAvailable(newStartDate, endDate, null, resourceRecord) &&
                // Respect resource's working time, if any
                (!calendar || calendar.isWorkingTime(newStartDate, endDate))));

        // Save reference to the resourceRecord so we can use it in onDrop
        context.resourceRecord = resourceRecord;
    };

    // Drop callback after a mouse up, take action and transfer the unplanned task to the real EventStore (if it's valid)
    override onDrop : DragHelperListenersTypes['drop'] = async({ context : ctx }) => {
        const
            { schedule }  = this,
            context       = ctx as DragDropContext;

        // If drop was done in a valid location, set the startDate and transfer the task to the Scheduler event store
        if (context.valid) {
            const
                { task, element, resourceRecord } = context,
                coordinate                        = DomHelper.getTranslateX(element),
                dropDate                          = schedule.getDateFromCoordinate(coordinate + (element.querySelector('.b-sch-event-buffer-before') as HTMLElement).offsetWidth, 'round', false);

            schedule.suspendAnimations();
            // We hand over the data + existing element to the Scheduler so it do the scheduling
            // await is used so that we have a reliable end date in the case of multiple event drag
            await schedule.scheduleEvent({
                eventRecord    : task as SchedulerEventModel,
                startDate      : dropDate,
                // Assign to the resourceRecord (resource) it was dropped on
                resourceRecord : resourceRecord as SchedulerResourceModel,
                element
            });
            schedule.resumeAnimations();
        }

        schedule.disableScrollingCloseToEdges(schedule.timeAxisSubGrid);
        schedule.features.eventTooltip.disabled = false;
    };
}
