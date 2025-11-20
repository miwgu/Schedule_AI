// scheduler with basic configuration
const resources = [
        { id : 'r1', name : 'Mike' },
        { id : 'r2', name : 'Linda' },
        { id : 'r3', name : 'Don' },
        { id : 'r4', name : 'Karen' },
        { id : 'r5', name : 'Doug' },
        { id : 'r6', name : 'Amit' },
        { id : 'r7', name : 'Celia' }
    ],
    events    = [
        {
            resourceId : 'r1',
            startDate  : new Date(2025, 0, 1, 10),
            endDate    : new Date(2025, 0, 1, 12),
            name       : 'Click me'
        },
        {
            resourceId : 'r2',
            startDate  : new Date(2025, 0, 1, 12),
            endDate    : new Date(2025, 0, 1, 14),
            name       : 'Drag me'
        },
        {
            resourceId : 'r3',
            startDate  : new Date(2025, 0, 1, 14),
            endDate    : new Date(2025, 0, 1, 16),
            name       : 'Double click me'
        },
        {
            resourceId : 'r4',
            startDate  : new Date(2025, 0, 1, 8),
            endDate    : new Date(2025, 0, 1, 11),
            name       : 'Right click me',
            eventColor : 'red'
        },
        {
            resourceId : 'r5',
            startDate  : new Date(2025, 0, 1, 15),
            endDate    : new Date(2025, 0, 1, 17),
            name       : 'Resize me'
        },
        {
            resourceId : 'r6',
            startDate  : new Date(2025, 0, 1, 16),
            endDate    : new Date(2025, 0, 1, 18),
            name       : 'Important meeting'
        },
        {
            resourceId : 'r6',
            startDate  : new Date(2025, 0, 1, 6),
            endDate    : new Date(2025, 0, 1, 8),
            name       : 'Sports event'
        },
        {
            resourceId : 'r7',
            startDate  : new Date(2025, 0, 1, 9),
            endDate    : new Date(2025, 0, 1, 12),
            name       : 'Dad\'s birthday',
            eventStyle : 'line',
            eventColor : 'blue'
        }
    ];

const scheduler = new Scheduler({
    appendTo : targetElement,

    height            : 493,
    startDate         : new Date(2025, 0, 1, 6),
    endDate           : new Date(2025, 0, 1, 20),
    viewPreset        : 'hourAndDay',
    eventStyle        : 'colored',
    resourceImagePath : 'data/Scheduler/images/users/',

    resources,
    events,

    features : {
        cellEdit     : true,
        filter       : true,
        //group        : 'city',
        quickFind    : true,
        regionResize : true,
        stripe       : true
    },

    columns : [
        { type : 'resourceInfo', text : 'Name', field : 'name', width : 140 }
    ]
});
