import TabPanel from '../../../lib/Core/widget/TabPanel.js';
import  './EventFilterPanel.js';
import  './ResourceFilterPanel.js';

export default class FilterPanel extends TabPanel {
    static type = 'filterpanel';
    static $name = 'FilterPanel';

    static configurable = {
        cls         : 'filters-panel',
        collapsible : true,
        width       : '35em',
        defaults    : {
            style : 'padding: 0 1em'
        },
        items : {
            resourceFilter : {
                type : 'resourcefilterpanel',
                tab  : {
                    icon : 'b-fa b-fa-users'
                },
                title : 'Filter resources'
            },
            eventFilter : {
                type : 'eventfilterpanel',
                tab  : {
                    icon : 'b-fa b-fa-calendar'
                },
                title : 'Filter tasks'
            }
        }
    };
}

FilterPanel.initClass();
