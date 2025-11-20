import { BryntumSchedulerProps } from '@bryntum/schedulerpro-angular';
import { ComboModel, Scheduler, StringHelper } from '@bryntum/schedulerpro';
import AppEventModel from './app.types';

export const schedulerProps: BryntumSchedulerProps = {
    rowHeight         : 50,
    barMargin         : 5,
    startDate         : new Date(2018, 1, 7, 8),
    endDate           : new Date(2018, 1, 7, 22),
    resourceImagePath : 'assets/users/',
    filterBarFeature  : true,
    viewPreset        : 'hourAndDay',
    columns           : [
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

    eventRenderer({ eventRecord }) {
        const appRecord = eventRecord as AppEventModel;
        return `
        <div class="info">
            <div class="name">${StringHelper.encodeHtml(appRecord.name)}</div>
            <div class="desc">${StringHelper.encodeHtml(appRecord.desc || '')}</div>
        </div>
      `;
    }

};
