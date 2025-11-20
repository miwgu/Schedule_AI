/**
 * Equipment grid component
 *
 * Taken from the vanilla example
 */
import { Grid, StringHelper } from '@bryntum/schedulerpro';

export default class EquipmentGrid extends Grid {
    /**
     * Original class name getter. See Widget.$name docs for the details.
     * @returns {string}
     */
    static $name = 'EquipmentGrid';

    static configurable = {
        features : {
            filterBar : true,
            cellEdit  : false
        },

        rowHeight : 80,

        columns : [
            {
                text       : '',
                field      : 'name',
                htmlEncode : false,
                cellCls    : 'b-equipment',
                ariaLabel  : 'Equipment column',
                filterable : {
                    filterField : {
                        ariaLabel : 'Filter equipment'
                    }
                },
                renderer : data => StringHelper.xss`<i class="${data.record.iconCls}"></i>${data.record.name}`
            }
        ]
    };
}
