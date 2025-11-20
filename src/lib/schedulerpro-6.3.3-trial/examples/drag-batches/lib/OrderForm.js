import Popup from '../../../lib/Core/widget/Popup.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

export default class OrderForm extends Popup {

    static $name = 'OrderForm';

    static configurable = {
        title       : 'New order',
        rootElement : document.body,
        centered    : true,
        width       : '30em',
        defaults    : {
            labelWidth : '10em'
        },
        items : {
            type : {
                type         : 'combo',
                valueField   : 'id',
                displayField : 'name',
                label        : 'Type',
                name         : 'type',
                listItemTpl  : template => StringHelper.xss`${template.name} (${template.children.length} tasks)`,
                editable     : false,
                required     : true,
                pickerWidth  : '20em'
            },
            customer : {
                type        : 'text',
                label       : 'Customer',
                name        : 'customer',
                placeholder : 'Acme Corporation',
                required    : true
            },
            quantity : {
                type  : 'number',
                label : 'Order quantity',
                step  : 10,
                min   : 10,
                value : 10,
                name  : 'size'
            }
        }
    };

    construct() {
        super.construct(...arguments);

        const orderTypeCombo = this.widgetMap.type;

        orderTypeCombo.store = this.templateStore;
        orderTypeCombo.value = this.templateStore.first;
    }
}
