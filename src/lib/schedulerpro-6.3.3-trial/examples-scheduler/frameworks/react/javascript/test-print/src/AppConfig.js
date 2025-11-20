import React from 'react';

/**
 * Application configuration
 */
const schedulerConfig = {
    rowHeight : 50,
    barMargin : 8,

    startDate : new Date(2017, 11, 1),
    endDate   : new Date(2017, 11, 3),

    stripeFeature       : true,
    dependenciesFeature : true,
    timeRangesFeature   : true,
    eventDragFeature    : {
        constrainDragToResource : true
    },
    printFeature : {
        test : true
    },
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true
    },

    columns : [{
        text  : 'Production line',
        width : 150,
        field : 'name',
        renderer({ record }) {
            return <span>{record.name}</span>;
        }
    }],

    viewPreset : {
        base           : 'hourAndDay',
        tickWidth      : 25,
        columnLinesFor : 0,
        headers        : [
            {
                unit       : 'd',
                align      : 'center',
                dateFormat : 'ddd DD MMM'
            },
            {
                unit       : 'h',
                align      : 'center',
                dateFormat : 'HH'
            }
        ]
    }
};

export { schedulerConfig };
