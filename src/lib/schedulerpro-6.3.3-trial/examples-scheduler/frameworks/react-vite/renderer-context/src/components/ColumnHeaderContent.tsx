import { useContext } from 'react';
import { RenderContext } from '../context/RenderContext';
import { CircularProgressbar } from 'react-circular-progressbar';
import { colors } from '../helpers/Colors';

export type ColumnHeaderContentProps = {
    text   : string
}

const ColumnHeaderContent = ({ text } : ColumnHeaderContentProps) => {
    const
        { showHeaderProgress, percentage, progressColor }      = useContext(RenderContext)!,
        { textColor, progressBarTrailColor, progressBarColor } = colors[progressColor!];

    return (
        <div style={{ display : 'flex', alignItems : 'center' }}>
            <div>{text}</div>
            {showHeaderProgress && <div className="progress">
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
                            fontSize : '2em'
                        }
                    }}
                />
            </div>
            }
        </div>
    );
};

export default ColumnHeaderContent;
