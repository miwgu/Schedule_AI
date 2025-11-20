import shared from '../_shared/shared.module.js';
import { Splitter, SchedulerPro, ProjectModel, Toolbar, ResourceHistogram } from '../../build/schedulerpro.module.js';

//region Data

const project = window.project = new ProjectModel({
    transport : {
        load : {
            url : 'data/data.json'
        }
    },
    autoLoad : true,

    // This config enables response validation and dumping of found errors to the browser console.
    // It's meant to be used as a development stage helper only, so please set it to false for production systems.
    validateResponse : true
});

const scheduler = new SchedulerPro({
    appendTo  : 'container',
    minHeight : 0,
    flex      : '1 1 50%',

    collapsible : true,
    header      : false,

    startDate         : new Date(2024, 3, 26),
    endDate           : new Date(2024, 4, 10),
    viewPreset        : 'dayAndWeek',
    eventStyle        : 'plain',
    tickSize          : 70,
    resourceImagePath : '../_shared/images/users/',

    columns : [
        { type : 'resourceInfo', text : 'Name', field : 'name', width : 150 },
        { text : 'City', field : 'city', width : 90 }
    ],

    project,

    tbar : [
        {
            ref      : 'zoomInButton',
            icon     : 'b-icon-search-plus',
            text     : 'Zoom in',
            onAction : () => scheduler.zoomIn()
        },
        {
            ref      : 'zoomOutButton',
            icon     : 'b-icon b-icon-search-minus',
            text     : 'Zoom out',
            onAction : () => scheduler.zoomOut()
        }
    ]
});

new Splitter({
    appendTo    : 'container',
    showButtons : true
});

const histogram = window.histogram = new ResourceHistogram({
    project,
    hideHeaders       : true,
    partner           : scheduler,
    appendTo          : 'container',
    rowHeight         : 60,
    minHeight         : 0,
    collapsible       : true,
    header            : false,
    flex              : '1 1 50%',
    showBarTip        : true,
    resourceImagePath : '../_shared/images/users/',
    columns           : [
        {
            type           : 'resourceInfo',
            text           : 'Name',
            field          : 'name',
            flex           : 1,
            showEventCount : false,
            width          : 240
        }
    ]
});

new Toolbar({
    appendTo : 'container',
    cls      : 'histogram-toolbar',
    items    : {
        showBarText : {
            type    : 'checkbox',
            text    : 'Show bar texts',
            tooltip : 'Check to show resource allocation in the bars',
            checked : false,
            onAction({ source }) {
                histogram.showBarText = source.checked;
            }
        },
        showMaxEffort : {
            type    : 'checkbox',
            text    : 'Show max allocation',
            tooltip : 'Check to display max resource allocation line',
            checked : true,
            onAction({ source }) {
                histogram.showMaxEffort = source.checked;
            }
        },
        showBarTip : {
            type    : 'checkbox',
            text    : 'Enable bar tooltip',
            tooltip : 'Check to show tooltips when moving mouse over bars',
            checked : true,
            onAction({ source }) {
                histogram.showBarTip = source.checked;
            }
        }
    }
});
