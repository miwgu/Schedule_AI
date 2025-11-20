/**
 * Application configuration
 */
import { StringHelper } from '@bryntum/schedulerpro';

const projectProps = {
    autoLoad  : true,
    transport : {
        load : {
            url : './data/data.json'
        }
    },

    // This config enables response validation and dumping of found errors to the browser console.
    // It's meant to be used as a development stage helper only so please set it to false for production systems.
    validateResponse : true
};

const schedulerConfig = {
    startDate : new Date(2020, 10, 29),
    endDate   : new Date(2021, 0, 10),
    rowHeight : 50,
    barMargin : 2,

    viewPreset        : 'weekAndDay',
    resourceImagePath : 'users/',

    columns : [
        {
            text  : 'Resource',
            field : 'name',
            width : 120,
            type  : 'resourceInfo'
        },
        {
            text   : 'Tasks',
            field  : 'events.length',
            width  : 70,
            align  : 'right',
            editor : false
        }
    ],

    // Configuring task edit feature adding checkbox
    taskEditFeature : {
        items : {
            // Adding it to the general tab
            generalTab : {
                items : {
                    // field name
                    showInTimelineField : {
                        type  : 'checkbox',
                        name  : 'showInTimeline',
                        // Text is shown to the right of the checkbox
                        text  : 'Show in timeline',
                        // use empty label to align checkbox with other fields
                        label : '&nbsp;'
                    }
                }
            }
        }
    },

    eventRenderer({ eventRecord: task, renderData }) {
        if (task.showInTimeline) {
            renderData.eventColor = 'green';
        }
        else {
            renderData.eventColor = 'blue';
        }

        return StringHelper.encodeHtml(task.name);
    }
};

export { schedulerConfig, projectProps };
