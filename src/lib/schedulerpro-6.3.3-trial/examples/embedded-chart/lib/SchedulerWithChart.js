import { SchedulerPro } from '../../../build/thin/schedulerpro.module.thin.js';
import LineChart from './LineChart.js';
import ButtonColumn from './ButtonColumn.js';
import LabColumn from './LabColumn.js';

// A custom subclass of the SchedulerPro, with configuration of columns, view preset etc
export default class SchedulerWithChart extends SchedulerPro {
    static $name = 'SchedulerWithChart';

    // Factoryable type name
    static type = 'schedulerwithchart';

    static configurable = {
        resourceMargin    : 15,
        resourceImagePath : '../_shared/images/users/',
        eventColor        : 'blue',
        eventStyle        : 'plain',
        allowOverlap      : false,
        columnLines       : false,
        features          : {
            eventDrag : {
                snapToResource : true
            },
            scheduleTooltip : false,
            dependencies    : false
        },
        snap       : true,
        viewPreset : {
            base              : 'dayAndWeek',
            tickWidth         : 40,
            displayDateFormat : 'LL',
            timeResolution    : {
                increment : 1,
                unit      : 'd'
            },
            headers : [
                {
                    unit       : 'w',
                    align      : 'center',
                    dateFormat : 'LL'
                },
                {
                    unit       : 'd',
                    align      : 'center',
                    dateFormat : 'DD'
                }
            ]
        },
        columns : [
            // A column using a custom render to display an icon + text
            {
                type : LabColumn.type
            },
            {
                type : ButtonColumn.type
            },
            {
                type    : 'timeAxis',
                widgets : [{
                    type : LineChart.type
                }],
                afterRenderCell({ record, grid : scheduler, widgets }) {
                    widgets[0].refresh({
                        record,
                        timeAxisViewModel : scheduler.timeAxisViewModel
                    });
                }
            }
        ]
    };
}

// Register this widget type with its Factory
SchedulerWithChart.initClass();
