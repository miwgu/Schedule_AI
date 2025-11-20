/**
 * Application configuration
 */
import { ProjectModel } from '@bryntum/schedulerpro';

const project = (window.project = new ProjectModel({
    transport : {
        load : {
            url : 'data/data.json'
        }
    },
    autoLoad : true,

    // This config enables response validation and dumping of found errors to the browser console.
    // It's meant to be used as a development stage helper only so please set it to false for production systems.
    validateResponse : true
}));

const schedulerConfig = {
    project,
    flex              : '1 1 50%',
    startDate         : new Date(2020, 3, 26),
    endDate           : new Date(2020, 4, 10),
    viewPreset        : 'dayAndWeek',
    eventStyle        : 'plain',
    tickSize          : 70,
    resourceImagePath : 'users/',
    columns           : [
        {
            type  : 'resourceInfo',
            text  : 'Name',
            field : 'name',
            width : 130
        },
        { text : 'City', field : 'city', width : 90 }
    ]
};

const histogramConfig = {
    project,
    flex                   : '1 1 50%',
    hideHeaders            : true,
    rowHeight              : 60,
    showBarTip             : true,
    scheduleTooltipFeature : false,
    nonWorkingTimeFeature  : true,
    resourceImagePath      : 'users/',
    columns                : [
        {
            type           : 'resourceInfo',
            text           : 'Name',
            field          : 'name',
            flex           : 1,
            showEventCount : false
        }
    ]
};

export { schedulerConfig, histogramConfig };
