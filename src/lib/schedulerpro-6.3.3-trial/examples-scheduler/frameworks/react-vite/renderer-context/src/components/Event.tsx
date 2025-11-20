import { useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { DateHelper, SchedulerEventModel } from '@bryntum/schedulerpro';
import { RenderContext } from '../context/RenderContext';
import { colors } from '../helpers/Colors';

export class AppEventModel extends SchedulerEventModel {
    declare icon: string;
    declare percentage: number;
}

export type EventProps = {
    eventRecord: AppEventModel
}

// The Event component
const Event = (props: EventProps) => {
    const { name, id, startDate, endDate, eventColor, icon, percentage } = props.eventRecord;

    // Calculate font weight and color
    const { boldFont, colorful } = useContext(RenderContext)!;
    const fontWeight             = boldFont ? 'bold' : 'normal';
    const textColor              = colorful && colors[eventColor!]?.textColor || colors.gray.textColor;
    const iconColor              = colorful && colors[eventColor!]?.iconColor || colors.gray.iconColor;
    const progressBarTrailColor  = colorful && colors[eventColor!]?.progressBarTrailColor || colors.gray.progressBarTrailColor;
    const progressBarColor       = colorful && colors[eventColor!]?.progressBarColor || colors.gray.progressBarColor;

    // Find progressbar styling options here
    // https://github.com/kevinsqi/react-circular-progressbar/
    return (
        <>
            <div className="progress">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={{
                        path : {
                            stroke : progressBarColor
                        },
                        trail : {
                            stroke       : progressBarTrailColor,
                            mixBlendMode : 'multiply'
                        },
                        text : {
                            fill     : textColor,
                            fontSize : '1.8em'
                        }
                    }}
                />
            </div>
            <div className="article" style={{ fontWeight, color : textColor }}>
                <div className="title">{name} <span>(#{id})</span></div>
                <div className="dates">{DateHelper.formatRange([startDate as Date, endDate as Date], 'S{HH:mm} - E{HH:mm}')}</div>
            </div>
            <i className={icon} style={{ color : iconColor }}/>
        </>
    );
};

Event.displayName = 'Event';

export default Event;
