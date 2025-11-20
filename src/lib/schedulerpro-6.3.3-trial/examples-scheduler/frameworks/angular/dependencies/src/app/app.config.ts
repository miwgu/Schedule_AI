/**
 * Application config file
 */

import { StringHelper, SchedulerEventModel, SchedulerResourceModel } from '@bryntum/schedulerpro';

class AppResourceModel extends SchedulerResourceModel {

    bg?: string;
    icon?: string;
    textColor?: string;

    static override get fields()  {
        return [
            'bg',
            'icon',
            'textColor'
        ];
    }
}

export const schedulerProps = {
    eventStyle : null,
    eventColor : null,

    resourceImagePath : 'assets/users/',

    stripeFeature       : true,
    dependenciesFeature : true,
    timeRangesFeature   : true,
    eventDragFeature    : {
        constrainDragToResource : true
    },

    rowHeight : 50,
    barMargin : 8,

    columns : [
        {
            text  : 'Production line',
            width : 150,
            field : 'name'
        }
    ],

    startDate : new Date(2017, 11, 1),
    endDate   : new Date(2017, 11, 3),

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        },
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true,
        resourceStore    : {
            modelClass : AppResourceModel
        }
    },

    viewPreset : {
        base            : 'hourAndDay',
        tickWidth       : 25,
        columnLinesFor  : 0,
        mainHeaderLevel : 1,
        headers         : [
            {
                unit       : 'd',
                align      : 'center',
                dateFormat : 'ddd DD MMM'
            },
            {
                unit       : 'h',
                align      : 'center',
                dateFormat : 'HH'
            }
        ]
    },

    eventRenderer({ eventRecord, resourceRecord, renderData } : { eventRecord : SchedulerEventModel; resourceRecord : AppResourceModel; renderData : any }) : string {
        const
            { encodeHtml } = StringHelper,
            bgColor        = encodeHtml(resourceRecord.bg || '');

        renderData.style = `background:${bgColor};border-color:${bgColor};color:${encodeHtml(resourceRecord.textColor || '')}`;
        renderData.iconCls.add('b-fa', `b-fa-${encodeHtml(resourceRecord.icon || '')}`);

        return StringHelper.encodeHtml(eventRecord.name);
    }

};
