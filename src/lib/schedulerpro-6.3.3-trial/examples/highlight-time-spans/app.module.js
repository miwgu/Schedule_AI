import shared from '../_shared/shared.module.js';
import { ResourceModel, EventModel, DateHelper, SchedulerPro, StringHelper } from '../../build/schedulerpro.module.js';
//region "lib/DriverResource.js"

class DriverResource extends ResourceModel {
    static get fields() {
        return [
            'vehicle',
            'active'
        ];
    }
}

//endregion

//region "lib/EventWithBoundaries.js"

class EventWithBoundaries extends EventModel {
    static get fields() {
        return [
            'minStartTime',
            'maxEndTime',

            // override field defaultValue to hours
            { name : 'durationUnit', defaultValue : 'h' }
        ];
    }

    get minStartDate() {
        if (this.minStartTime) {
            const start = DateHelper.startOf(this.startDate);

            start.setHours(this.minStartTime);

            return start;
        }
    }

    get maxEndDate() {
        if (this.maxEndTime) {

            const end = DateHelper.startOf(this.endDate);

            end.setHours(this.maxEndTime);

            return end;
        }
    }
}

//endregion

const scheduler = new SchedulerPro({
    appendTo : 'container',
    flex     : 1,
    // A Project holds the data and the calculation engine for Scheduler Pro. It also acts as a CrudManager, allowing
    // loading data into all stores at once
    project  : {
        autoLoad        : true,
        eventModelClass : EventWithBoundaries,
        resourceStore   : {
            modelClass : DriverResource,
            sorters    : [{
                field     : 'name',
                ascending : true
            }]
        },
        transport : {
            load : {
                url : './data/data.json'
            }
        }
    },

    startDate         : new Date(2022, 4, 25, 7),
    endDate           : new Date(2022, 4, 25, 20),
    rowHeight         : 80,
    barMargin         : 10,
    resourceImagePath : '../_shared/images/users/',
    eventColor        : 'blue',
    eventStyle        : 'plain',
    timeResolution    : {
        unit      : 'min',
        increment : 20
    },
    snap       : true,
    viewPreset : {
        base    : 'hourAndDay',
        headers : [
            {
                unit       : 'd',
                align      : 'center',
                dateFormat : 'LL'
            },
            {
                unit       : 'h',
                align      : 'center',
                dateFormat : 'h A'
            }
        ]
    },
    features : {
        eventDrag : {
            snapToResource : true
        },
        scheduleTooltip   : false,
        dependencies      : false,
        // Enable the highlight time span feature
        timeSpanHighlight : true,
        filterBar         : true,
        // Custom event tooltip
        eventTooltip      : {
            template : ({ eventRecord }) => `<dl>
                <dt>${StringHelper.encodeHtml(eventRecord.name)}</dt>
                <dd>
                     <i class="b-icon b-fa-map-marker-alt"></i>${StringHelper.encodeHtml(eventRecord.resource.name)}
                </dd>
                <dt>Scheduled at:</dt>
                <dd>
                    <i class="b-icon b-fa-calendar-alt"></i>${DateHelper.format(eventRecord.startDate, 'LST')} - ${DateHelper.format(eventRecord.endDate, 'LST')}
                </dd>
                ${typeof eventRecord.minStartTime === 'number' ? `
                <dt>Deliver between:</dt>
                <dd>
                    <i class="b-icon b-fa-clock"></i>${DateHelper.format(eventRecord.minStartDate, 'LST')} - ${DateHelper.format(eventRecord.maxEndDate, 'LST')}
                </dd>` : ''}
            </dl>`
        },

        // Customize the task editor fields of the General tab
        taskEdit : {
            editorConfig : {
                width : '35em'
            },
            items : {
                generalTab : {
                    defaults : {
                        labelWidth : '9em'
                    },
                    items : {
                        // Add a new row with fields for editing the min / max delivery hours
                        container : {
                            type   : 'container',
                            width  : '100%',
                            weight : 210,
                            items  : {
                                // two custom fields for min / max daily delivery time
                                minStartTime : {
                                    labelWidth : '9em',
                                    type       : 'number',
                                    min        : 0,
                                    max        : 23,
                                    label      : 'Delivery time',
                                    width      : 200,
                                    flex       : '0 0 200px',
                                    name       : 'minStartTime'
                                },
                                maxEndTime : {
                                    label : '-',
                                    type  : 'number',
                                    style : 'margin-inline-start:0.7em',
                                    min   : 0,
                                    max   : 24,
                                    flex  : '0 0 90px',
                                    name  : 'maxEndTime'
                                }
                            }
                        },

                        // Not using % done field in this demo
                        percentDoneField : false
                    }
                }
            }
        }
    },

    // A simple demo button to show off the highlighting API
    tbar : [
        {
            type       : 'button',
            ref        : 'highlightDragButton',
            cls        : 'b-blue',
            text       : 'Highlight while dragging',
            pressed    : true,
            toggleable : true
        },
        {
            type       : 'button',
            ref        : 'highlightButton',
            text       : 'Highlight 9-10am + 2-4pm',
            toggleable : true,
            onToggle   : 'up.onHighlightButtonToggle'
        }
    ],

    // A custom event renderer returning a DOMConfig object
    eventRenderer({ eventRecord, resourceRecord: machine, renderData }) {
        const
            { minStartDate, maxEndDate } = eventRecord;

        if (!minStartDate || !maxEndDate) {
            return StringHelper.encodeHtml(eventRecord.name);
        }

        return [
            {
                children : [
                    {
                        class : 'eventName',
                        html  : StringHelper.encodeHtml(eventRecord.name)
                    },
                    {
                        class : 'b-delivery-window',
                        html  : `Deliver ${DateHelper.format(minStartDate, 'LST')} - ${DateHelper.format(maxEndDate, 'LST')}</div>`
                    }
                ]
            }
        ];
    },

    columns : [
        {
            type           : 'resourceInfo',
            text           : 'Driver',
            width          : 180,
            showEventCount : false,
            filterable     : {
                filterField : {
                    triggers : {
                        search : {
                            cls : 'b-icon b-fa-filter'
                        }
                    },
                    placeholder : 'Search drivers...'
                }
            },
            showMeta : record => StringHelper.xss`<i class="b-icon b-fa-circle b-active-status ${record.active ? 'b-active' : ''}"></i><i class="b-icon b-fa-${record.vehicle || ''}"></i >`
        },
        {
            text   : 'City',
            field  : 'city',
            editor : false
        }
    ],

    // This template method dictates how event bars are constrained for drag drop, resize and create UI interactions
    getDateConstraints(resourceRecord, eventRecord) {
        if (eventRecord) {
            const { minStartDate, maxEndDate } = eventRecord;

            if (minStartDate) {
                return {
                    start : minStartDate,
                    end   : maxEndDate
                };
            }
        }
    },

    // Utility method used to highlight the delivery window for an event record
    highlightDeliveryWindow({ minStartDate, maxEndDate }) {
        const highlightEnabled = this.widgetMap.highlightDragButton.pressed;

        this.widgetMap.highlightButton.toggle(false);

        if (highlightEnabled && minStartDate && maxEndDate) {
            scheduler.highlightTimeSpan({
                // Optional, to support animations
                animationId : 'deliveryWindow',
                // Highlight surrounding area
                surround    : true,
                name        : 'Unavailable time',
                // The time span to visualize
                startDate   : minStartDate,
                endDate     : maxEndDate
            });
        }
    },

    onHighlightButtonToggle({ pressed }) {
        if (pressed) {
            this.highlightTimeSpans([
                {
                    name      : 'Morning',
                    // Add a custom CSS class to the highlight element
                    cls       : 'morning',
                    startDate : new Date(2022, 4, 25, 9),
                    endDate   : new Date(2022, 4, 25, 10)
                },
                {
                    name      : 'Afternoon',
                    startDate : new Date(2022, 4, 25, 14),
                    endDate   : new Date(2022, 4, 25, 16)
                }
            ]);
        }
        else {
            this.unhighlightTimeSpans(true);
        }
    },

    // A few event listeners
    listeners : {
        scheduleClick() {
            scheduler.unhighlightTimeSpans(true);
        },
        eventSelectionChange() {
            const selectedEvent = scheduler.selectedEvents[0];

            if (selectedEvent && scheduler.selectedEvents.length === 1) {
                scheduler.highlightDeliveryWindow(scheduler.selectedEvents[0]);
            }
        },
        eventDragStart({ eventRecords }) {
            scheduler.highlightDeliveryWindow(eventRecords[0]);
        },
        eventDragReset(source) {
            scheduler.unhighlightTimeSpans();
        },
        eventResizeStart({ eventRecord }) {
            scheduler.highlightDeliveryWindow(eventRecord);
        },
        eventResizeEnd() {
            scheduler.unhighlightTimeSpans();
        }
    }
});
