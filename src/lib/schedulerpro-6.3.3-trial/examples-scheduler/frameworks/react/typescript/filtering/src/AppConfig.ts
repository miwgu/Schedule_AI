/**
 * Scheduler config
 */
import { DateHelper, FieldTriggerConfig, StringHelper } from '@bryntum/schedulerpro';
import { BryntumSchedulerProps, BryntumTextFieldProps } from '@bryntum/schedulerpro-react';

const schedulerConfig: BryntumSchedulerProps = {
    eventStyle        : 'colored',
    resourceImagePath : 'users/',
    columns           : [
        {
            type  : 'resourceInfo',
            text  : 'Staff',
            width : 170
        },
        {
            text   : 'Role',
            field  : 'role',
            width  : 140,
            editor : {
                type        : 'combo',
                items       : ['Sales', 'Developer', 'Marketing', 'Product manager'],
                editable    : false,
                pickerWidth : 140
            }
        }
    ],
    filterBarFeature  : true,
    stripeFeature     : true,
    timeRangesFeature : true,
    eventEditFeature  : {
        items : {
            locationField : {
                type    : 'text',
                name    : 'location',
                label   : 'Location',
                dataset : { eventType : 'Meeting' },
                weight  : 200
            }
        }
    },

    displayDateFormat : 'HH:mm',

    barMargin : 5,
    rowHeight : 55,

    startDate  : new Date(2017, 1, 7, 8),
    endDate    : new Date(2017, 1, 7, 18),
    viewPreset : 'hourAndDay',

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    // Specialized event bar template with header and footer
    eventRenderer({
        eventRecord,
        resourceRecord,
        renderData
    }: {
        eventRecord: any
        resourceRecord: any
        renderData: any
    }): string {
        renderData.style = 'background-color:' + resourceRecord.color;

        return `
            <div class="b-sch-event-header">${DateHelper.format(eventRecord.startDate, this.displayDateFormat as string)}</div>
            <div class="b-sch-event-footer">${StringHelper.encodeHtml(eventRecord.name) || ''}</div>
        `;
    }
};

const findConfig: BryntumTextFieldProps = {
    placeholder          : 'Find tasks by name',
    keyStrokeChangeDelay : 80,
    clearable            : true,
    width                : '12.5em',
    triggers             : {
        filter : {
            align : 'start',
            cls   : 'b-fa b-fa-filter'
        } as FieldTriggerConfig
    }
};

const highlightConfig: BryntumTextFieldProps = {
    placeholder          : 'Highlight tasks',
    keyStrokeChangeDelay : 80,
    clearable            : true,
    width                : '12.5em',
    triggers             : {
        filter : {
            align : 'start',
            cls   : 'b-fa b-fa-search'
        } as FieldTriggerConfig
    }
};

export { schedulerConfig, findConfig, highlightConfig };
