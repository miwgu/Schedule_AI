import { type BryntumSchedulerProps } from '@bryntum/schedulerpro-react';
import { SchedulerResourceModel } from '@bryntum/schedulerpro';

class Property extends SchedulerResourceModel {
    static get fields() {
        return [
            // Using icons for resources
            {
                name         : 'image',
                defaultValue : false
            }
        ];
    }
}

const useSchedulerConfig = (handleToolbarToggle: any): BryntumSchedulerProps => {
    return {
        startDate : new Date(2022, 11, 1),
        endDate   : new Date(2022, 11, 20),
        barMargin : 10,
        rowHeight : 60,

        cls : 'custom-style',

        viewPreset : 'weekAndDayLetter',

        sortFeature : 'name',

        // Shade non-working days
        nonWorkingTimeFeature : true,

        eventNonWorkingTimeFeature : {
            disabled : true
        },

        scheduleTooltipFeature : {
            // Hide schedule tooltip when hovering non-working days
            hideForNonWorkingTime : true
        },

        // CrudManager loads all data from a single source
        crudManager : {
            resourceStore : {
                modelClass : Property
            },

            autoLoad : true,

            loadUrl : 'data/data.json'
        },

        resourceImagePath : '../_shared/images/users/',

        columns : [
            {
                type          : 'resourceInfo',
                width         : 200,
                text          : 'Properties',
                headerWidgets : [
                    {
                        ref     : 'toolbarToggleButton',
                        type    : 'button',
                        icon    : 'b-fa b-fa-cog',
                        cls     : 'b-transparent',
                        tooltip : 'Toggle settings toolbar',
                        onClick : handleToolbarToggle
                    }
                ]
            }
        ]
    };
};

export default useSchedulerConfig;
