import shared from '../_shared/shared.module.js';
import { StringHelper, Toast, Container } from '../../build/schedulerpro.module.js';

//region Data

const
    resources = [
        { id : 'r1', name : 'Mike', eventColor : 'pink' },
        { id : 'r2', name : 'Linda', eventColor : 'orange' },
        { id : 'r3', name : 'Dan', eventColor : 'violet' },
        { id : 'r4', name : 'Madison', eventColor : 'blue' },
        { id : 'r5', name : 'Malik', eventColor : 'purple', rowHeight : 90, resourceMargin : { start : 10, end : 10 } },
        { id : 'r6', name : 'Rob', eventColor : 'indigo' }
    ],
    events    = [
        {
            id         : 1,
            resourceId : 'r1',
            name       : 'Fork project',
            startDate  : new Date(2017, 0, 1, 10),
            endDate    : new Date(2017, 0, 1, 12),
            iconCls    : 'b-fa b-fa-code-branch'
        },
        {
            id         : 2,
            resourceId : 'r1',
            name       : 'Extend test',
            startDate  : new Date(2017, 0, 1, 11),
            endDate    : new Date(2017, 0, 1, 15),
            iconCls    : 'b-fa b-fa-search'
        },
        {
            id         : 3,
            resourceId : 'r2',
            name       : 'UI testing',
            startDate  : new Date(2017, 0, 1, 10),
            endDate    : new Date(2017, 0, 1, 15),
            iconCls    : 'b-fa b-fa-user'
        },
        {
            id         : 4,
            resourceId : 'r3',
            name       : 'Release to prod server',
            startDate  : new Date(2017, 0, 1, 14),
            endDate    : new Date(2017, 0, 1, 17),
            iconCls    : 'b-fa b-fa-server'
        },
        {
            id         : 5,
            resourceId : 'r4',
            name       : 'Update docs',
            startDate  : new Date(2017, 0, 1, 8),
            endDate    : new Date(2017, 0, 1, 11),
            iconCls    : 'b-fa b-fa-book'
        },
        {
            id         : 6,
            resourceId : 'r5',
            name       : 'Fix bug',
            startDate  : new Date(2017, 0, 1, 15),
            endDate    : new Date(2017, 0, 1, 17),
            iconCls    : 'b-fa b-fa-bug'
        },
        {
            id         : 7,
            resourceId : 'r6',
            name       : 'Fix IE issues',
            startDate  : new Date(2017, 0, 1, 16),
            endDate    : new Date(2017, 0, 1, 18),
            iconCls    : 'b-fa b-fa-band-aid'
        }
    ];

//endregion

// Create infrastructure to hold the different components of the demo
const container = new Container({
    layout   : 'hbox',
    appendTo : 'container',
    ref      : 'horizontal',
    items    : {
        scheduler : {
            type : 'scheduler',
            minWidth          : '50em',
            eventStyle        : 'border',
            resourceImagePath : '../_shared/images/users/',
            features          : {
                // This feature enables row resizing by drag-drop
                rowResize : {
                    minHeight : 20
                }
            },

            columns : [
                { type : 'resourceInfo', text : 'Name', field : 'name', width : 130 },
                {
                    type     : 'template',
                    text     : 'Cool link',
                    width    : 130,
                    template : ({ record }) => record.rowHeight || record.resourceMargin || record.barMargin ? 'Settings from data' : `<a href="#">Click me<a>`
                }
            ],

            resources,
            events,

            startDate  : new Date(2017, 0, 1, 8),
            endDate    : new Date(2017, 0, 1, 19),
            viewPreset : 'hourAndDay',

            resourceMargin : {
                start : 10,
                end   : 10
            },

            onCellClick({ column, record, event }) {
                if (column.field === 'name') {
                    Toast.show(StringHelper.xss`You clicked ${record.name}`);
                }
                else if (event.target.href) {
                    Toast.show('You clicked a link');
                }
            },

            eventRenderer({ eventRecord, renderData }) {
                // Make events with low height use a small font (uses em in styling, will scale)
                renderData.cls.tiny = renderData.height < 23;

                return StringHelper.encodeHtml(eventRecord.name);
            }
        },
        splitter : {
            type : 'splitter'
        },
        tools : {
            type        : 'panel',
            collapsible : {
                direction : 'right'
            },
            minWidth : '20em',
            width    : 300,
            title    : 'Settings',
            items    : {
                resource : {
                    type         : 'combo',
                    label        : 'Adjust',
                    displayField : 'name',
                    value        : 'all',
                    editable     : false,
                    items        : [{ id : 'all', name : 'All unset' }].concat(resources),
                    onSelect({ record }) {
                        if (record.id === 'all') {
                            changeAdjustTarget(scheduler);
                        }
                        else {
                            changeAdjustTarget(scheduler.resourceStore.getById(record.id));
                        }
                    }
                },
                rowHeight : {
                    type      : 'slider',
                    text      : 'Row height',
                    showValue : true,
                    min       : 20,
                    onInput({ value }) {
                        scheduler.suspendAnimations();
                        adjustTarget.rowHeight = value;

                        changeAdjustTarget(adjustTarget);
                        scheduler.resumeAnimations();
                    }
                },
                barMargin : {
                    type      : 'slider',
                    text      : 'Bar margin',
                    showValue : true,
                    onInput({ value }) {
                        adjustTarget.barMargin = value;

                        changeAdjustTarget(adjustTarget);
                    }
                },
                resourceMarginTop : {
                    type      : 'slider',
                    text      : 'Resource margin top',
                    showValue : true,
                    max       : 14,
                    onInput({ value }) {
                        adjustTarget.resourceMargin = {
                            start : value,
                            end   : adjustTarget.resourceMargin?.end ?? scheduler.resourceMargin.end
                        };

                        changeAdjustTarget(adjustTarget);
                    }
                },
                resourceMarginBottom : {
                    type      : 'slider',
                    text      : 'Resource margin bottom',
                    showValue : true,
                    max       : 14,
                    onInput({ value }) {
                        adjustTarget.resourceMargin = {
                            end   : value,
                            start : adjustTarget.resourceMargin?.start ?? scheduler.resourceMargin.start
                        };

                        changeAdjustTarget(adjustTarget);
                    }
                }
            }
        }
    }
});

const
    {
        scheduler,
        rowHeight,
        barMargin,
        resourceMarginTop,
        resourceMarginBottom
    } = container.widgetMap;

let adjustTarget;

function changeAdjustTarget(target) {
    adjustTarget = target;

    const rowHeightValue = target.rowHeight ?? scheduler.rowHeight;

    rowHeight.value            = rowHeightValue;
    barMargin.value            = target.barMargin ?? scheduler.barMargin;
    resourceMarginTop.value    = adjustTarget.resourceMargin ? adjustTarget.resourceMargin.start : scheduler.resourceMargin.start;
    resourceMarginBottom.value = adjustTarget.resourceMargin ? adjustTarget.resourceMargin.end : scheduler.resourceMargin.end;

    // Limit margins to somewhat sane values
    barMargin.max = Math.max(0, (rowHeightValue - 10) / 2);
}

changeAdjustTarget(scheduler);
