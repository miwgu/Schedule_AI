import { ComboModel, Scheduler, StringHelper } from '@bryntum/schedulerpro';
import { BryntumSchedulerProps } from '@bryntum/schedulerpro-angular';
import AppEventModel from './lib/AppEventModel';

export const schedulerProps : BryntumSchedulerProps = {
    rowHeight         : 60,
    timeRangesFeature : true,
    startDate         : new Date(2018, 1, 7, 8),
    endDate           : new Date(2018, 1, 7, 22),
    eventColor        : 'green',
    eventStyle        : 'border',
    resourceImagePath : 'assets/users/',

    columns : [
        {
            type  : 'resourceInfo',
            text  : 'Staff',
            field : 'name'
        },
        {
            text   : 'Type',
            field  : 'role',
            width  : 130,
            editor : {
                type        : 'combo',
                items       : ['Sales', 'Developer', 'Marketing', 'Product manager'],
                editable    : false,
                pickerWidth : 140
            }
        }
    ],

    viewPreset : 'hourAndDay',

    eventStore : {
        // @ts-ignore
        modelClass : AppEventModel
    },

    eventEditFeature : {
        // Add extra widgets to the event editor
        items : {
            descriptionField : {
                type   : 'text',
                name   : 'desc',
                label  : 'Description',
                weight : 100
            },
            eventTypeField : {
                type   : 'combo',
                name   : 'eventType',
                label  : 'Type',
                // Provided items start at 100, and go up in 100s, so insert after first one
                weight : 110,
                items  : ['Appointment', 'Internal', 'Meeting', 'Important']
            },
            eventColorField : {
                type        : 'combo',
                label       : 'Color',
                name        : 'eventColor',
                editable    : false,
                clearable   : true,
                weight      : 120,
                items       : Scheduler.eventColors.map(color => [color, StringHelper.capitalize(color)]),
                listItemTpl : record => {
                    const row = record as ComboModel;
                    return `<div class="color-box b-sch-${row.value}"></div><div>${row.text}</div>`;
                }
            }
        }
    },

    eventRenderer : ({ eventRecord }) => {
        const appEvent = eventRecord as AppEventModel;
        return StringHelper.xss`
                <div class="info">
                    <div class="name">${appEvent.name}</div>
                    <div class="desc">${appEvent.desc}</div>
                </div>
            `;
    },

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        },
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true
    }
};
