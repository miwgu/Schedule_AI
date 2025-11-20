import React from 'react';
import { DateHelper as DH } from '@bryntum/schedulerpro';
import { CircularProgressbar } from 'react-circular-progressbar';
import type AppEventModel from '../lib/AppEventModel.ts';

import 'react-circular-progressbar/dist/styles.css';

type AppEventProps = {
    eventRecord : AppEventModel;
}

const AppEvent : React.FunctionComponent<AppEventProps> = props => {

    const { name, percentage, id, startDate, endDate, eventColor, icon } = props.eventRecord;

    const pathColor = {
        blue          : '#0766f1',
        'deep-orange' : '#da4814',
        green         : '#049610',
        indigo        : '#2611e5',
        lime          : '#5fce13',
        orange        : '#f38d01',
        pink          : '#ee0f59',
        purple        : '#e017ca',
        red           : '#cc1f03',
        violet        : '#8d37e1'
    }[eventColor!];

    return (
        <>
            <div className="progress">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={{
                        path : {
                            stroke : '#fff'
                        },
                        trail : {
                            stroke       : pathColor,
                            mixBlendMode : 'multiply'
                        },
                        text : {
                            fill     : '#fff',
                            fontSize : '1.8em'
                        }
                    }}
                />
            </div>
            <div className="article">
                <div className="title">{name} <span>(#{id})</span></div>
                <div className="dates">{DH.formatRange([startDate as Date, endDate as Date], 'S{HH:mm} - E{HH:mm}')}</div>
            </div>
            <i className={icon}/>
        </>
    );

};

export default AppEvent;
