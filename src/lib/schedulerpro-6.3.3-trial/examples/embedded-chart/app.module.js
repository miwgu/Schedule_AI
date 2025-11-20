import shared from '../_shared/shared.module.thin.js';
import { DateHelper, StringHelper, Toast } from '../../build/thin/core.module.thin.js';
import { Chart } from '../../build/thin/chart.module.thin.js';
import { ColumnStore, WidgetColumn } from '../../build/thin/grid.module.thin.js';
import { ResourceModel, SchedulerPro } from '../../build/thin/schedulerpro.module.thin.js';
//region "lib/LineChart.js"

class LineChart extends Chart {
    static $name = 'LineChart';

    // Factoryable type name
    static type = 'linechart';

    static configurable = {
        showControls : false,
        showLegend   : false,
        showAxes     : false,
        showPoints   : false,
        animate      : false,
        height       : '100px',
        chartPadding : {
            top    : 5,
            left   : 0,
            right  : 0,
            bottom : -19
        },
        labels : {
            field : 'label'
        },
        series : [{
            field       : 'value',
            label       : '% Utilization',
            strokeColor : '#ff572244',
            fillColor   : '#ff572211',
            stepped     : true,
            fill        : true
        }, {
            field       : 'maxValue',
            label       : 'Max Capacity',
            strokeColor : '#4caf50',
            borderDash  : [5, 5],
            strokeWidth : 2
        }]
    };

    refresh({
        record,
        timeAxisViewModel
    }) {
        if (!record.rowExpanded) {
            return;
        }

        const
            { timeAxis } = timeAxisViewModel,
            labels       = timeAxis.map(({ startDate }) => DateHelper.format(startDate, 'LL')).concat(100),
            maxValue     = record.showCapacityLine ? timeAxis.map(_ => record.maxCapacity).concat(record.maxCapacity) : [];

        this.element.ariaLabel = StringHelper.xss`Chart showing lab results for experiments in ${record.name}`;

        this.data = record.getUtilizationData(timeAxis.records).concat(100).map((r, i) => {
            return {
                label    : labels[i],
                value    : r,
                maxValue : maxValue[i]
            };
        });

        // stretch the chart to take the whole timeaxis width
        this.width = `${timeAxisViewModel.totalSize + 10}px`;
    }
}

// Register this widget type with its Factory
LineChart.initClass();

//endregion

//region "lib/ButtonColumn.js"

// The widget column showing two icons, and when expanded, also a utilization scale for the line chart
class ButtonColumn extends WidgetColumn {
    static $name = 'ButtonColumn';

    static type = 'buttoncolumn';

    static defaults = {
        width   : 70,
        align   : 'center',
        // Put a custom CSS class on each cell to make styling easy
        cellCls : 'b-buttoncell',
        // Define the widgets we want
        widgets : [
            {
                type     : 'button',
                cls      : 'b-transparent',
                menuIcon : null,
                icon     : 'b-icon b-fa-ellipsis-h',
                menu     : {
                    items : [
                        {
                            text : 'Cool action',
                            icon : 'b-fa-vial',
                            onItem({ item, menu }) {
                                const rowRecord = menu.owner.cellInfo.record;

                                Toast.show(`You clicked ${item.text} for ${rowRecord.name}`);
                            }
                        }
                    ]
                }
            },
            {
                type : 'button',
                cls  : 'b-transparent',
                icon : 'b-fa-chevron-down',
                // uncomment to show a tooltip
                // tooltip : 'Toggle row expanded state',
                onAction({ source : button }) {
                    const { record } = button.cellInfo;

                    record.toggleExpanded();
                }
            }
        ]
    };
}

ColumnStore.registerColumnType(ButtonColumn);

//endregion

//region "lib/Lab.js"

// Create our own model representing a resource, a Lab in this demo
class Lab extends ResourceModel {

    static fields = [
        // Redefine rowHeight field and add a defaultValue
        { name : 'rowHeight', defaultValue : 70 },
        // A new field storing the expanded tow height
        { name : 'expandedRowHeight', defaultValue : 180 },
        // Add a few new fields unique to this demo
        { name : 'maxCapacity', defaultValue : 100 }, 'rowExpanded', 'showCapacityLine'
    ];

    toggleExpanded(value) {
        this.rowExpanded = value != null ? value : !this.rowExpanded;
    }

    get rowHeight() {
        return this.rowExpanded ? this.expandedRowHeight : super.rowHeight;
    }

    set rowHeight(value) {
        super.rowHeight = value;
    }

    get cls() {
        return (super.cls || '') + ' ' + (this.rowExpanded ? 'b-row-expanded' : '');
    }

    set cls(value) {
        super.cls = value;
    }

    // Generate some dummy data
    getUtilizationData(dateIntervals) {
        if (dateIntervals.length !== this.utilizationData?.length) {
            this.utilizationData = dateIntervals.map(tick => 100 + (Math.round(Math.random() * 3) * 100));
        }
        return this.utilizationData;
    }
}

//endregion

//region "lib/LabColumn.js"

// The widget column showing the laboratory name, and when expanded also two widgets for interacting with the chart
class LabColumn extends WidgetColumn {
    static $name = 'LabColumn';

    static type = 'labcolumn';

    static defaults = {
        text    : 'Test Laboratory',
        width   : 200,
        editor  : false,
        cellCls : 'b-labcell',
        widgets : [
            {
                type : 'widget',
                cls  : 'b-name'
            },
            {
                type      : 'slider',
                step      : 100,
                width     : 140,
                min       : 100,
                max       : 400,
                text      : 'Max capacity',
                // The record field name to read & write to / from
                name      : 'maxCapacity',
                showValue : false
            },
            {
                type    : 'slidetoggle',
                label   : 'Show capacity',
                width   : 140,
                checked : true,
                // The record field name to read & write to / from
                name    : 'showCapacityLine'
            }

        ],
        afterRenderCell({ widgets, record }) {
            widgets[0].html = StringHelper.xss`<i class="${record.iconCls}"></i>${record.name}`;
        }
    };
}

ColumnStore.registerColumnType(LabColumn);

//endregion

//region "lib/SchedulerWithChart.js"

// A custom subclass of the SchedulerPro, with configuration of columns, view preset etc
class SchedulerWithChart extends SchedulerPro {
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

//endregion

const scheduler = new SchedulerWithChart({
    appendTo  : 'container',
    startDate : new Date(2025, 3, 1),
    endDate   : new Date(2025, 4, 1),
    // A Project holds the data and the calculation engine for Scheduler Pro. It also acts as a CrudManager, allowing
    // loading data into all stores at once
    project   : {
        autoLoad           : true,
        resourceModelClass : Lab,
        transport          : {
            load : {
                url : './data/data.json'
            }
        }
    }
});
