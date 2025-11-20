import { Model, SchedulerResourceModel, StringHelper } from '@bryntum/schedulerpro';
import { BryntumSchedulerProps } from '@bryntum/schedulerpro-angular';

class CustomResourceModel extends SchedulerResourceModel {

    static get fields() {
        return [
            'capacity',
            'condition',
            'color',
            'floor',
            { name : 'redecorated', type : 'date' }
        ];
    }

    color: string;
}

export const schedulerProps: BryntumSchedulerProps = {
    startDate  : new Date(2019, 1, 19, 6),
    endDate    : new Date(2019, 1, 19, 20),
    viewPreset : 'hourAndDay',
    rowHeight  : 50,
    barMargin  : 5,
    eventStyle : 'colored',

    crudManager : {
        autoLoad : true,

        resourceStore : {
            modelClass : CustomResourceModel
        },

        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        }
    },

    columns : [
        {
            text       : 'Room',
            field      : 'name',
            width      : 130,
            region     : 'left',
            htmlEncode : false,
            renderer   : ({ value, record }: { value: string; record: Model }): string => {
                return `<div class="box b-sch-${(record as CustomResourceModel).color}"></div>${StringHelper.encodeHtml(value)}`;
            }
        },
        {
            text   : 'Floor',
            field  : 'floor',
            width  : 100,
            region : 'left'
        },
        {
            type       : 'number',
            text       : 'Capacity',
            field      : 'capacity',
            width      : 80,
            region     : 'left',
            align      : 'right',
            htmlEncode : false,
            renderer({ value }: { value: number }): string {
                const icon = value < 25 ? 'user' : value < 200 ? 'user-friends' : 'users';
                return `${StringHelper.encodeHtml(value.toString())}<div class="capacity b-fa b-fa-${icon}"></div>`;
            }
        },
        {
            type   : 'date',
            text   : 'Redecorated',
            field  : 'redecorated',
            width  : 115,
            region : 'right'
        },
        {
            type   : 'rating',
            text   : 'Condition',
            field  : 'condition',
            region : 'right'
        }
    ],

    subGridConfigs : {
        left : {
            width : 310
        },
        // A "normal" flexed region is automatically added for scheduler unless specified
        right : {
            width : 275
        }
    },

    eventEditFeature : {
        items : {
            resourceField : {
                label : 'Room'
            }
        }
    },

    columnLines : false,

    tbar : [
        '->', // Makes buttons right aligned in the toolbar container
        {
            type : 'button',
            ref  : 'addButton',
            icon : 'b-fa-plus',
            text : 'Add column'
        }, {
            type     : 'button',
            ref      : 'removeButton',
            cls      : 'b-red',
            icon     : 'b-fa-trash',
            text     : 'Remove column',
            disabled : true
        }
    ]
};
