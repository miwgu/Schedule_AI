import { Combo, Popup, PopupConfig, Store, StringHelper } from '@bryntum/schedulerpro';
import { Template } from './Template';

type OrderFormConfig = PopupConfig & {
    templateStore: Store
}

export class OrderForm extends Popup {

    static $name = 'OrderForm';

    declare templateStore: Store;

    static configurable = {
        title       : 'New order',
        rootElement : document.body,
        centered    : true,
        width       : '30em',
        defaults    : {
            labelWidth : '10em'
        },
        items : [
            {
                type         : 'combo',
                ref          : 'typeCombo',
                valueField   : 'id',
                displayField : 'name',
                label        : 'Type',
                name         : 'type',
                listItemTpl  : record => {
                    const template = record as Template;
                    return StringHelper.xss`${template.name} (${template.children.length} tasks)`;
                },
                editable    : false,
                required    : true,
                pickerWidth : '20em'
            },
            {
                type        : 'text',
                label       : 'Customer',
                name        : 'customer',
                placeholder : 'Customer Name',
                required    : true
            },
            {
                type  : 'number',
                label : 'Order quantity',
                step  : 10,
                min   : 10,
                value : 10,
                name  : 'size'
            }
        ]
    } as PopupConfig;

    constructor(config?: OrderFormConfig) {
        super(config);
    }

    construct() {
        super.construct(...arguments);

        const orderTypeCombo = this.widgetMap['typeCombo'] as Combo;

        orderTypeCombo.store = this.templateStore;
        orderTypeCombo.value = this.templateStore.first;
    }
}
