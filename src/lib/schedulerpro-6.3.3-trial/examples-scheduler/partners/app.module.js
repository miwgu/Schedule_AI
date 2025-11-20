import shared from '../_shared/shared.module.js';
import { Splitter, Scheduler } from '../../build/schedulerpro.module.js';

//region Data

const
    resources = [
        { id : 1, name : 'Arcady', role : 'Core developer', eventColor : 'purple' },
        { id : 2, name : 'Dave', role : 'Tech Sales', eventColor : 'indigo' },
        { id : 3, name : 'Henrik', role : 'Sales', eventColor : 'blue' },
        { id : 4, name : 'Linda', role : 'Core developer', eventColor : 'cyan' },
        { id : 5, name : 'Maxim', role : 'Developer & UX', eventColor : 'green' },
        { id : 6, name : 'Mike', role : 'CEO', eventColor : 'lime' },
        { id : 7, name : 'Lee', role : 'CTO', eventColor : 'orange' }
    ],
    events    = [
        {
            id         : 1,
            resourceId : 1,
            name       : 'First Task',
            startDate  : new Date(2018, 0, 1, 10),
            endDate    : new Date(2018, 0, 1, 12)
        },
        {
            id         : 2,
            resourceId : 2,
            name       : 'Second Task',
            startDate  : new Date(2018, 0, 1, 12),
            endDate    : new Date(2018, 0, 1, 13)
        },
        {
            id         : 3,
            resourceId : 3,
            name       : 'Third Task',
            startDate  : new Date(2018, 0, 1, 14),
            endDate    : new Date(2018, 0, 1, 16)
        },
        {
            id         : 4,
            resourceId : 4,
            name       : 'Fourth Task',
            startDate  : new Date(2018, 0, 1, 8),
            endDate    : new Date(2018, 0, 1, 11)
        },
        {
            id         : 5,
            resourceId : 5,
            name       : 'Fifth Task',
            startDate  : new Date(2018, 0, 1, 15),
            endDate    : new Date(2018, 0, 1, 17)
        },
        {
            id         : 6,
            resourceId : 6,
            name       : 'Sixth Task',
            startDate  : new Date(2018, 0, 1, 16),
            endDate    : new Date(2018, 0, 1, 18)
        }
    ];

//endregion

const topScheduler = new Scheduler({
    ref               : 'top-scheduler',
    appendTo          : 'container',
    flex              : '1 1 50%',
    resourceImagePath : '../_shared/images/users/',

    collapsible : true,
    header      : false,
    minHeight   : 0,

    tbar : [
        {
            type        : 'button',
            toggleable  : true,
            pressed     : true,
            text        : 'Sync scrolling',
            icon        : 'b-fa-square',
            pressedIcon : 'b-fa-check-square',
            onToggle({ pressed }) {
                if (pressed) {
                    topScheduler.addPartner(bottomScheduler);
                }
                else {
                    topScheduler.removePartner(bottomScheduler);
                }
            }
        },
        {
            type     : 'button',
            ref      : 'zoomInButton',
            cls      : 'b-transparent',
            icon     : 'b-icon-search-plus',
            tooltip  : 'Zoom in',
            onAction : () => topScheduler.zoomIn()
        },
        {
            type     : 'button',
            ref      : 'zoomOutButton',
            cls      : 'b-transparent',
            icon     : 'b-icon-search-minus',
            tooltip  : 'Zoom out',
            onAction : () => topScheduler.zoomOut()
        }
    ],
    features : {
        stripe : true,
        sort   : 'name'
    },

    columns : [
        {
            type  : 'resourceInfo',
            text  : 'Staff',
            width : '10em'
        }
    ],

    resources,

    events,

    startDate  : new Date(2018, 0, 1, 6),
    endDate    : new Date(2018, 0, 1, 20),
    viewPreset : 'minuteAndHour'
});

new Splitter({
    appendTo    : 'container',
    showButtons : true
});

const bottomScheduler = new Scheduler({
    ref               : 'bottom-scheduler',
    cls               : 'bottom-scheduler',
    appendTo          : 'container',
    flex              : '1 1 50%',
    collapsible       : true,
    header            : false,
    minHeight         : 0,
    partner           : topScheduler,
    hideHeaders       : true,
    resourceImagePath : '../_shared/images/users/',
    features          : {
        stripe : true,
        sort   : 'name'
    },

    columns : [
        {
            type  : 'resourceInfo',
            text  : 'Staff',
            width : '10em'
        }
    ],

    resourceStore : topScheduler.resourceStore,
    eventStore    : topScheduler.eventStore
});
