var {
    Scheduler,
    DateHelper,
    StringHelper
} = window.bryntum.schedulerpro;
const scheduler = new Scheduler({
    appendTo    : 'container',
    mode        : 'vertical',
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },
    startDate  : new Date(2022, 2, 7, 7),
    endDate    : new Date(2022, 2, 7, 18),
    // Customize the hourAndDay preset, to only show hours
    viewPreset : {
        base    : 'hourAndDay',
        headers : [{
            unit       : 'hour',
            dateFormat : 'LT'
        }]
    },
    // Make time axis occupy less space
    subGridConfigs : {
        locked : {
            width : 30
        }
    },
    barMargin         : 5,
    eventStyle        : 'rounded',
    resourceMargin    : 5,
    tickSize          : 80,
    resourceImagePath : '../_shared/images/users/',
    features          : {
        dependencies : {
            // Round corners where dependency line segments connect
            radius : 6
        },
        regionResize : false
    },
    eventRenderer : ({
        eventRecord
    }) => ({
        children : [{
            className : 'event-name',
            text      : eventRecord.name
        }, {
            className : 'event-time',
            text      : `${DateHelper.format(eventRecord.startDate, 'LT')} - ${DateHelper.format(eventRecord.endDate, 'LT')}`
        }]
    })
});