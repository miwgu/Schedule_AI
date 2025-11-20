import React from 'react';
import './DemoEventTip.scss';

const DemoEventTip = props => {
    const { data } = props;
    const { eventRecord } = data;
    const { resource: resourceRecord } = eventRecord;
    const resourceImg = `${resourceRecord.name.toLowerCase()}.jpg`;

    return (
        <div className="event-tip">
            <header>{eventRecord.name}</header>
            <dl>
                <div>
                    <dt>Assigned to</dt>
                    <dd>
                        <img
                            className="resource-image"
                            src={`./users/${resourceImg}`}
                            alt={`${resourceRecord.name}`}
                        ></img>
                        <div>{resourceRecord.name}</div>
                    </dd>
                </div>
                <div className="times">
                    <dt>Time</dt>
                    <dd>
                        <label>Start:</label>
                        <div>{data.startText}</div>
                        <label>End:</label>
                        <div>{data.endText}</div>
                    </dd>
                </div>
            </dl>
        </div>
    );
};

export default DemoEventTip;
