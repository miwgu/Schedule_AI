import shared from '../_shared/shared.module.js';
import { Scheduler, SchedulerResourceModel, DateHelper, LocaleManager } from '../../build/schedulerpro.module.js';

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

const scheduler = new Scheduler({
    appendTo : 'container',

    startDate : new Date(2022, 11, 1),
    endDate   : new Date(2022, 11, 20),
    barMargin : 10,
    rowHeight : 60,
    cls       : 'custom-style',

    viewPreset : 'weekAndDayLetter',

    features : {
        sort                : 'name',
        // Shade non-working days
        nonWorkingTime      : true,
        eventNonWorkingTime : {
            disabled : true
        },

        scheduleTooltip : {
            // Hide schedule tooltip when hovering non-working days
            hideForNonWorkingTime : true
        }
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
                    type    : 'button',
                    icon    : 'b-fa b-fa-cog',
                    cls     : 'b-transparent',
                    tooltip : 'Toggle settings toolbar',
                    onClick : async({ source : button }) => {
                        const
                            { grid } = button.owner,
                            { tbar } = grid;

                        if (!tbar.element.style.height) {
                            // Set initial height + flush for transition to work
                            tbar.element.style.height = tbar.element.offsetHeight + 'px';
                            tbar.element.offsetHeight;
                        }

                        tbar.element.classList.toggle('b-collapsed');
                    }
                }
            ]
        }
    ],

    tbar : [
        {
            type        : 'button',
            toggleable  : true,
            pressed     : true,
            text        : 'Custom styling',
            icon        : 'b-fa-square',
            pressedIcon : 'b-fa-check-square',
            onToggle({ pressed }) {
                scheduler.cls = pressed ? 'custom-style' : '';
            }
        },
        {
            type        : 'button',
            toggleable  : true,
            pressed     : true,
            text        : 'Display ranges',
            icon        : 'b-fa-square',
            pressedIcon : 'b-fa-check-square',
            onToggle({ pressed }) {
                scheduler.features.nonWorkingTime.disabled = !pressed;
            }
        },
        {
            type        : 'button',
            toggleable  : true,
            pressed     : false,
            text        : 'Shade bars',
            icon        : 'b-fa-square',
            pressedIcon : 'b-fa-check-square',
            onToggle({ pressed }) {
                scheduler.features.eventNonWorkingTime.disabled = !pressed;
            }
        },
        '->',
        {
            type  : 'widget',
            cls   : 'b-has-label',
            style : 'margin-inline-end:1em',
            html  : '<label>Non-working days</label>'
        },
        {
            type          : 'daybuttons',
            ref           : 'nonWorkingDays',
            dayNameLength : 3,
            value         : DateHelper.nonWorkingDaysAsArray,
            onChange      : 'up.onNonWorkingDayChange'
        }
    ],

    onNonWorkingDayChange({ source : dayButtons }) {
        const locale                            = LocaleManager;

        // Update nonWorkingDays in current locale
        locale.locale.DateHelper.nonWorkingDays = Object.fromEntries(dayButtons.valueAsDayNumbers.map(value => [value, 1]));

        // Force-apply current locale to update non-working intervals
        LocaleManager.applyLocale(locale, true);
    }
});
