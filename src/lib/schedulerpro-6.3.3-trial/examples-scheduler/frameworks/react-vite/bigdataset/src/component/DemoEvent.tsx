import React from 'react';
import { DateHelper, SchedulerEventModel } from '@bryntum/schedulerpro';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class AppEventModel extends SchedulerEventModel {
    percentage? : number;
}

interface DemoEventProps {
    eventRecord : AppEventModel
}

const DemoEvent = (props : DemoEventProps) => {
    const { name, percentage, id, startDate, endDate, eventColor } = props.eventRecord;
    const pathColor                                                = {
        green  : '#25b632',
        indigo : '#2a13fe',
        purple : '#fe14e7'
    }[eventColor!];

    return (
        <>
            <div className="progress">
                <CircularProgressbar
                    value={percentage!}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        textSize  : '1.9em',
                        textColor : pathColor,
                        pathColor
                    })}
                />
            </div>
            <div className="article">
                <div className="title">{name} <span>(#{id})</span></div>
                <div className="dates">{DateHelper.formatRange([startDate as Date, endDate as Date], 'S{MMM D} - E{MMM D}')}</div>
            </div>
        </>
    );
};

export default DemoEvent;
