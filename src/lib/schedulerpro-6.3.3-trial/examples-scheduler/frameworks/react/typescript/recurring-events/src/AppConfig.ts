import { BryntumSchedulerProps } from '@bryntum/schedulerpro-react';
import { StringHelper } from '@bryntum/schedulerpro';

const schedulerConfig: BryntumSchedulerProps = {
    rowHeight             : 70,
    enableRecurringEvents : true,
    resourceImagePath     : 'users/',

    columns     : [{ type : 'resourceInfo', text : 'Name' }],
    crudManager : {
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    startDate  : new Date(2018, 0, 1),
    endDate    : new Date(2018, 4, 1),
    viewPreset : 'weekAndDayLetter',

    sortFeature         : 'name',
    eventTooltipFeature : true,
    labelsFeature       : {
        top : {
            field : 'name'
        }
    },

    eventRenderer({ renderData, eventRecord }: { renderData: any; eventRecord: any }) {
        renderData.iconCls = eventRecord.isRecurring
            ? 'b-fa b-fa-star'
            : eventRecord.isOccurrence
                ? 'b-fa b-fa-sync'
                : 'b-fa b-fa-calendar';
        return StringHelper.encodeHtml(eventRecord.name);
    }
};

export { schedulerConfig };
