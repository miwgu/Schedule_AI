import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import DragHelper from '../../../lib/Core/helper/DragHelper.js';
import DomHelper from '../../../lib/Core/helper/DomHelper.js';

// Handles dragging unscheduled jobs from the grid onto parent evnets in the schedule
export default class Drag extends DragHelper {
    static get configurable() {
        return {
            callOnFunctions      : true,
            // Don't drag the actual row element, clone it
            cloneTarget          : true,
            // We want to set the proxy size ourselves, to mimic a scheduler event
            autoSizeClonedTarget : false,
            // Only allow drops on parent events
            dropTargetSelector   : '.b-nested-events-parent',
            // Only allow drag of row elements inside on the unplanned grid
            targetSelector       : '.b-unplanned .b-grid-row',
            // We are going to make the scheduler adopt the proxy on drop for a nice transition, prevent removing it
            removeProxyAfterDrop : false
        };
    }

    afterConstruct() {
        // Configure DragHelper with schedule's scrollManager to allow scrolling while dragging
        this.scrollManager = this.schedule.scrollManager;
    }

    createProxy(element) {
        const
            { schedule }    = this,
            job             = this.grid.getRecordFromElement(element),
            { eventHeight } = schedule.features.nestedEvents,
            newSize         = schedule.timeAxisViewModel.getDistanceForDuration(job.durationMS);

        // Make a drag proxy element that looks like an event bar
        return DomHelper.createElement({
            className : 'b-sch-event-wrap b-nested-event b-unassigned',
            style     : {
                width  : newSize,
                height : eventHeight
            },
            children : [
                {
                    className : 'b-sch-event',
                    style     : 'background-color: hsl(200deg 100% 40%)',
                    children  : [
                        {
                            className : 'b-sch-event-content',
                            text      : job.name
                        }
                    ]
                }
            ]
        });
    }

    onDragStart({ context }) {
        const { schedule } = this;

        // Save a reference to the job being dragged for later access
        const job = context.job = this.grid.getRecordFromElement(context.grabbed);

        // Make scheduler scroll if we drag close to its edges
        schedule.enableScrollingCloseToEdges(schedule.timeAxisSubGrid);

        // Prevent tooltips from showing while dragging
        schedule.features.eventTooltip.disabled = true;

        // Highlight possible drop parents
        const candidates = schedule.eventStore.query(event => event.isParent && schedule.canFitJob(job, event, event.startDate, DateHelper.add(event.startDate, job.duration, 'm')));
        schedule.highlightEvents({ events : candidates, unhighlightOnClick : false, scroll : false });
    }

    onDrag({ context }) {
        const
            { schedule }    = this,
            { job, target } = context,
            targetParent    = target && schedule.resolveEventRecord(target.closest('.b-nested-events-parent')),
            startDate       = schedule.getDateFromCoordinate(context.newX, 'round', false),
            endDate         = startDate && DateHelper.add(startDate, job.duration, job.durationUnit),
            startOfWeek     = DateHelper.startOf(startDate, 'week'),
            hoursIntoWeek   = DateHelper.diff(startOfWeek, startDate, 'hour');

        // Mimic the time base coloring used for events in the demo
        context.element.firstElementChild.style.backgroundColor = `hsl(200deg 100% ${70 - hoursIntoWeek / 4}%)`;

        // Validate that a job can be dropped at the current location (and possibly also adjust its date to fit)
        const fitsAtDate = schedule.canFitJob(job, targetParent, startDate, endDate);

        if (fitsAtDate) {
            context.newStartDate = fitsAtDate;
        }
        else {
            context.valid = false;
        }
    }

    // Drop callback after a mouse up, nest the dropped event inside the target parent
    async onDrop({ context }) {
        const
            { schedule }                   = this,
            { job, element, newStartDate } = context;

        schedule.disableScrollingCloseToEdges(schedule.timeAxisSubGrid);

        schedule.features.eventTooltip.disabled = false;

        schedule.unhighlightEvents();

        // If drop was done in a valid location, set the startDate and nest the event
        if (context.valid) {
            const targetParent = schedule.resolveEventRecord(context.target.closest('.b-nested-events-parent'));

            // Dropped on a scheduled event, create a dependency between them
            if (targetParent) {
                element.classList.remove('b-drag-proxy');

                // We hand over the data + existing element to the Scheduler and let it do the scheduling
                await schedule.scheduleEvent({
                    eventRecord       : job,
                    parentEventRecord : targetParent,
                    startDate         : newStartDate,
                    element
                });
            }
        }
    }
}
