/**
 * Scheduler Component
 */

// React libraries
import React, { forwardRef, useState } from 'react';
import { PropTypes } from 'prop-types';

// Bryntum libraries
import { BryntumScheduler } from '@bryntum/schedulerpro-react';
import { StringHelper } from '@bryntum/schedulerpro';

// Application components
import DemoButton from './DemoButton';
import DemoEditor from './DemoEditor';
import DemoTooltip from './DemoTooltip';
import DemoEventTip from './DemoEventTip';
import DemoWidget from './DemoWidget';

// Scheduler component
const Scheduler = forwardRef((props, schedulerRef) => {
    // Turn events for important resources red + prefix with "Important"
    const eventRenderer = ({ eventRecord, resourceRecord, renderData }) => {
        let prefix = '';

        if (resourceRecord.important) {
            renderData.eventColor = 'red';
            prefix = 'Important ';
        }

        return prefix + StringHelper.encodeHtml(eventRecord.name);
    };

    // Handlers
    /**
     * User clicked the "+1 hour" button on a resource
     */
    const handleDelayClick = record => {
        record.events.forEach(event => {
            // Move 1h forward in time
            event.startDate = new Date(event.startDate.getTime() + 1000 * 60 * 60);
        });
    };

    // Scheduler config
    const [schedulerConfig] = useState({
        startDate         : new Date(2017, 1, 7, 8),
        endDate           : new Date(2017, 1, 7, 18),
        resourceImagePath : 'users/',
        viewPreset        : 'hourAndDay',
        eventRenderer,
        bbar              : {
            items : [{
                type : 'widget',
                html : <DemoWidget />
            }]
        },
        cellTooltipFeature : {
            tooltipRenderer : ({ record }) => {
                return (
                    <React.StrictMode>
                        <DemoTooltip record={record} />
                    </React.StrictMode>
                );
            }
        },
        eventTooltipFeature : {
            // Custom cls to for scoped tooltip styling
            cls      : 'react-tooltip',
            template : data => (
                <React.StrictMode>
                    <DemoEventTip data={data} />
                </React.StrictMode>
            )
        },

        crudManager : {
            autoLoad  : true,
            transport : {
                load : {
                    url : 'data/data.json'
                }
            }
        },

        columns : [
            {
                text                 : 'Staff<div class="small-text">(React JSX)</div>',
                field                : 'name',
                htmlEncodeHeaderText : false,
                width                : 130,
                // JSX as renderer
                renderer             : ({ value }) => {
                    return (
                        <div>
                            <b>{StringHelper.encodeHtml(value)}</b>
                        </div>
                    );
                }
            },
            {
                text  : 'Type',
                field : 'role',
                width : 130,
                tooltip(a, b, c) {
                    console.log('tt=', a, b, c);
                    return 'Mara';
                }
            },
            {
                text                 : 'Delay<div class="small-text">(React component)</div>',
                htmlEncodeHeaderText : false,
                width                : 120,
                align                : 'center',
                editor               : false,
                // Using custom React component
                renderer             : ({ record }) => (
                    <DemoButton
                        text    = {'+1 hour'}
                        onClick = {() => handleDelayClick(record)}
                    />
                )
            },
            {
                text                 : 'Important<div class="small-text">(React editor)</div>',
                htmlEncodeHeaderText : false,
                field                : 'important',
                width                : 120,
                align                : 'center',
                editor               : reactRef => <DemoEditor ref={reactRef} />,
                renderer             : ({ value }) => (value ? 'Yes' : 'No')
            }
        ]
    });

    return <BryntumScheduler
        {...schedulerConfig}
        {...props}
        ref={schedulerRef}
    />;
});

Scheduler.propTypes = {
    barMargin              : PropTypes.number,
    onEventSelectionChange : PropTypes.func.isRequired
};

Scheduler.defaultProps = {
    barMargin : 5
};

export default Scheduler;
