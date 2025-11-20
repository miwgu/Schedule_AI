import { SchedulerEventModel, StringHelper } from '@bryntum/schedulerpro';
import { BryntumSchedulerProps } from '@bryntum/schedulerpro-angular';

export const schedulerProps: BryntumSchedulerProps = {
    rowHeight : 70,

    enableRecurringEvents : true,
    resourceImagePath     : 'assets/users/',

    sortFeature         : 'name',
    eventTooltipFeature : true,
    labelsFeature       : {
        top : {
            field : 'name'
        }
    },

    columns : [
        { type : 'resourceInfo', text : 'Name' }
    ],

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        }
    },

    startDate  : new Date(2018, 0, 1),
    endDate    : new Date(2018, 4, 1),
    viewPreset : 'weekAndDayLetter',
    eventRenderer({ renderData, eventRecord } : { renderData : any; eventRecord: SchedulerEventModel }): string {
        renderData.iconCls = eventRecord.isRecurring ? 'b-fa b-fa-star' : (eventRecord.isOccurrence ? 'b-fa b-fa-sync' : 'b-fa b-fa-calendar');
        return StringHelper.encodeHtml(eventRecord.name);
    }
};
