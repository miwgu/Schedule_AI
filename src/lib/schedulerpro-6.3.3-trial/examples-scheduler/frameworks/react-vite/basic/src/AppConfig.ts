import { AppEventModel } from './AppEventModel';
import { BryntumSchedulerProps } from '@bryntum/schedulerpro-react';

export const schedulerProps: BryntumSchedulerProps = {
    resourceImagePath : 'users/',

    startDate : new Date(2018, 1, 7, 8),
    endDate   : new Date(2018, 1, 7, 22),

    viewPreset : 'hourAndDay',

    crudManager : {
        eventStore : {
            // @ts-ignore
            modelClass : AppEventModel
        },
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        autoLoad : true
    },

    timeRangesFeature : {
        narrowThreshold : 10
    },

    columns : [
        {
            type      : 'resourceInfo',
            text      : 'Staff',
            showImage : true,
            width     : 130
        },
        {
            text  : 'Type',
            field : 'role',
            width : 130
        }
    ]
};
