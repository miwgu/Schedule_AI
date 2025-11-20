import shared from '../_shared/shared.module.js';
import { SchedulerPro, Tooltip } from '../../build/schedulerpro.module.js';

// Import the percent bar feature

const scheduler = new SchedulerPro({
    // A Project holds the data and the calculation engine for Scheduler Pro. It also acts as a CrudManager, allowing
    // loading data into all stores at once
    project : {
        autoLoad  : true,
        transport : {
            load : {
                url : './data/data.json'
            }
        }
    },

    appendTo          : 'container',
    startDate         : '2020-03-23',
    endDate           : '2020-03-26',
    rowHeight         : 70,
    barMargin         : 22,
    eventStyle        : 'rounded',
    resourceImagePath : '../_shared/images/users/',

    // Custom view preset, with more compact display of hours
    viewPreset : {
        base      : 'hourAndDay',
        tickWidth : 15,
        headers   : [
            {
                unit       : 'day',
                dateFormat : 'ddd DD/MM' //Mon 01/10
            },
            {
                unit       : 'hour',
                dateFormat : 'h'
            }
        ]
    },

    features : {
        columnLines  : false,
        dependencies : false,
        // Enable the percent bar feature
        percentBar   : {
            allowResize    : true,
            showPercentage : false // showing a tooltip instead
        }
    },

    columns : [
        {
            type           : 'resourceInfo',
            text           : 'Staff',
            showEventCount : true
        }
    ],

    listeners : {
        // This demo shows a custom tooltip while resizing the % done value
        percentBarDragStart({ taskRecord, domEvent }) {
            this.percentTooltip = new Tooltip({
                autoShow                 : true,
                updateContentOnMouseMove : true,
                forElement               : domEvent.target.closest('.b-sch-event-wrap'),
                align                    : 'b-t',
                minWidth                 : '14em',
                getHtml() {
                    return `Task is <span class="b-percent-value" >${taskRecord.percentDone}%</span> completed`;
                }
            });
        },
        percentBarDrop({ taskRecord }) {
            this.percentTooltip.destroy();
        },
        percentBarAbort({ taskRecord }) {
            this.percentTooltip.destroy();
        }
    }
});
