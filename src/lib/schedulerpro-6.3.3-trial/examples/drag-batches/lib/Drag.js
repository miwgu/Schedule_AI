import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import DragHelper from '../../../lib/Core/helper/DragHelper.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

// Handles dragging unscheduled orders from the grid onto the schedule
export default class Drag extends DragHelper {
    static get configurable() {
        return {
            // Don't drag the actual row element, clone it
            cloneTarget          : true,
            autoSizeClonedTarget : false,
            // Only allow drag of unscheduled orders
            targetSelector       : '.b-grid-row:not(.scheduled)',

            schedule  : null,
            grid      : null,
            listeners : {
                dragstart : 'onOrderDragStart',
                drag      : 'onOrderDrag',
                drop      : 'onOrderDrop'
            }
        };
    }

    createProxy(element) {
        const
            order             = this.grid.getRecordFromElement(element),
            firstTaskDuration = order.firstTask.duration,
            proxy             = element.cloneNode();

        // Mutate dragged element (grid row) into an event bar
        proxy.classList.remove('b-grid-row');
        proxy.classList.add('b-sch-event-wrap', 'b-sch-style-border', 'b-unassigned-class');
        proxy.innerHTML = StringHelper.xss`
            <div class="b-sch-event b-has-content b-sch-event-withicon">
                <div class="b-sch-event-content">
                    <div>${order.name}</div>
                    <span class="validity-overlap"><i></i>No overlap</span>
                    <span class="validity-machine"><i></i>Start machine: ${order.orderStartMachine.name}</span>
                </div>
            </div>
        `;

        // Size the proxy to match first task width
        proxy.style.width = (firstTaskDuration * this.schedule.tickSize) + 'px';

        return proxy;
    }

    onOrderDragStart({ context }) {
        const
            me           = this,
            { schedule } = me,
            proxy        = context.element;

        // save a reference to the Order being dragged so we can access it later
        context.order = me.grid.getRecordFromElement(context.grabbed);

        schedule.enableScrollingCloseToEdges(schedule.timeAxisSubGrid);

        // Prevent tooltips from showing while dragging
        schedule.features.eventTooltip.disabled = true;
        schedule.element.classList.add('b-mask-incompatible-rows');

        context.validityOverlapIcon  = proxy.querySelector('.validity-overlap i');
        context.validityResourceIcon = proxy.querySelector('.validity-machine i');

        // Only allow drops on the machine specific to the start task of the order, blur out others (in CSS
        me.dropTargetSelector             = `.b-timeline-subgrid .b-grid-row[data-id="${context.order.orderStartMachine.id}"]`;
        context.order.orderStartMachine.cls = 'compatible';
    }

    onOrderDrag({ context }) {
        const
            date      = this.schedule.getDateFromCoordinate(context.newX, 'round', false),
            // Only allow drops of an order onto the first machine which creates the chain of production tasks
            available = date && this.schedule.eventStore.isDateRangeAvailable(date, DateHelper.add(date, context.order.firstTask.duration, 'h'), null, context.order.orderStartMachine);

        context.validityResourceIcon.className = `b-fa b-fa-fw b-fa-${context.valid ? 'check' : 'times'}`;
        context.validityOverlapIcon.className = `b-fa b-fa-fw b-fa-${available ? 'check' : 'times'}`;
        context.valid                         = available;
    }

    // Drop callback after a mouse up, take action and transfer the unplanned Order to the real EventStore (if it's valid)
    async onOrderDrop({ context }) {
        const
            { schedule } = this;

        // If drop was done in a valid location, set the startDate and transfer the task to the Scheduler event store
        if (context.valid) {
            const date = schedule.getDateFromCoordinate(context.newX, 'round', false);

            schedule.project.scheduleOrder(context.order, date);
        }

        schedule.disableScrollingCloseToEdges(schedule.timeAxisSubGrid);
        schedule.features.eventTooltip.disabled = false;
        schedule.element.classList.remove('b-mask-incompatible-rows');
        context.order.orderStartMachine.cls = '';
    }
}
