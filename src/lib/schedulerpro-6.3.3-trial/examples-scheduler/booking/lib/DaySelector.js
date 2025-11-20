import InstancePlugin from '../../../lib/Core/mixin/InstancePlugin.js';
import GridFeatureManager from '../../../lib/Grid/feature/GridFeatureManager.js';
import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import DomHelper from '../../../lib/Core/helper/DomHelper.js';
import EventHelper from '../../../lib/Core/helper/EventHelper.js';
import Tooltip from '../../../lib/Core/widget/Tooltip.js';

/**
 * Custom feature that allows drag selecting a range of days to create a reservation
 */
export default class DaySelector extends InstancePlugin {
    // Storing class name to avoid issues from minifiers that it
    static $name = 'DaySelector';

    // Hook up a mouse down listener at construction time
    construct(client, config) {
        super.construct(client, config);

        client.on({
            resourceTimeRangeMouseDown : 'onDayMouseDown',
            resourceTimeRangeMouseOver : 'onDayMouseOver',
            thisObj                    : this
        });
    }

    // User moused down on an "empty" part of the schedule
    onDayMouseDown({ resourceRecord, resourceTimeRangeRecord, domEvent }) {
        if (resourceTimeRangeRecord) {
            const { client : scheduler } = this;

            // Initiate a new reservation
            this.reservation = {
                startX        : domEvent.clientX,
                resource      : resourceRecord,
                mouseDownDate : resourceTimeRangeRecord.startDate,
                startDate     : resourceTimeRangeRecord.startDate,
                endDate       : resourceTimeRangeRecord.endDate
            };

            // Make resource time ranges part of the selection look selected
            domEvent.target.closest('.b-sch-resourcetimerange').classList.add('b-selected', 'b-first', 'b-last');

            scheduler.element.classList.add('b-reserving-dates');

            EventHelper.on({
                mouseup : 'onMouseUp',
                element : document,
                once    : true,
                thisObj : this
            });
        }
    }

    // Mouse over a new element in the schedule
    onDayMouseOver({ resourceTimeRangeRecord, domEvent }) {
        if (!this.reservation) {
            return;
        }
        const
            { client : scheduler, reservation } = this,
            { mouseDownDate, resource, startX } = reservation,
            startDate                           = DateHelper.min(resourceTimeRangeRecord.startDate, mouseDownDate),
            endDate                             = DateHelper.max(resourceTimeRangeRecord.endDate, mouseDownDate),
            dayRangeInstances                   = scheduler.resourceTimeRangeStore.getRanges({
                resourceRecord : resource,
                startDate,
                endDate
            });

        Object.assign(reservation, {
            startDate,
            endDate,
            dayRangeInstances,
            nights     : DateHelper.getDurationInUnit(startDate, endDate, 'days'),
            totalPrice : dayRangeInstances.reduce((pre, day) => pre + day.pricePerNight, 0)
        });

        // Prevent booking over gaps or existing bookings in the schedule
        if (
            dayRangeInstances.length < reservation.nights ||
            scheduler.eventStore.getEvents({ resourceRecord : resource, startDate, endDate }).length > 0
        ) {
            reservation.valid = false;
            scheduler.element.classList.add('b-invalid-reservation');
        }
        else {
            reservation.valid = true;
            scheduler.element.classList.remove('b-invalid-reservation');
        }

        DomHelper.removeClsGlobally(scheduler.element, 'b-selected');

        dayRangeInstances.forEach((range, i) => {
            const element = scheduler.getElementFromResourceTimeRangeRecord(range);
            element.classList.add('b-selected');
            element.classList.toggle('b-first', i === 0);
            element.classList.toggle('b-last', i === dayRangeInstances.length - 1);
        });

        if (Math.abs(domEvent.clientX - startX) > 10 && !this.tooltip) {
            reservation.dragStarted = true;
            this.tooltip            = new Tooltip({
                rootElement : document.body,
                cls         : 'b-dayselector-tip',
                align       : 'b-t',
                html        : '1 night'
            });
            this.tooltip.show();
        }

        if (this.tooltip) {
            this.tooltip.alignTo(scheduler.getElementFromResourceTimeRangeRecord(dayRangeInstances[dayRangeInstances.length - 1]));
            this.tooltip.html = reservation.valid
                ? `${reservation.nights} night${reservation.nights > 1 ? 's' : ''}, $${reservation.totalPrice}`
                : 'Invalid reservation';
        }
    }

    // Mouse up anywhere
    onMouseUp() {
        const
            { client : scheduler, reservation } = this;

        scheduler.element.classList.remove('b-reserving-dates');
        DomHelper.removeClsGlobally(scheduler.element, 'b-selected');

        this.tooltip?.destroy();
        this.tooltip = this.reservation = null;

        if (reservation?.valid) {
            const
                { resource } = reservation,
                eventRecord  = new scheduler.eventStore.modelClass(reservation);

            scheduler.editEvent(eventRecord, resource);
        }
    }
}

GridFeatureManager.registerFeature(DaySelector, false, 'Scheduler');
