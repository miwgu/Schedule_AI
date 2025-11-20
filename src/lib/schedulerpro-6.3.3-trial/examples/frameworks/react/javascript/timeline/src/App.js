/**
 * The React App file
 */

// React libraries
import React, { Fragment, useRef } from 'react';

// Stylings
import './App.scss';

// Application components
import {
    BryntumDemoHeader,
    BryntumSchedulerPro,
    BryntumTimeline,
    BryntumButtonGroup,
    BryntumSchedulerProProjectModel
} from '@bryntum/schedulerpro-react';
import { Toast } from '@bryntum/schedulerpro';
import { schedulerConfig, projectProps } from './AppConfig';

const App = () => {
    const timelineRef = useRef(null);
    const projectRef = useRef(null);

    // Timeline size change handler
    const setTimelineHeight = ({ source : button }) => {
        const timeline = timelineRef.current.instance;
        timeline.element.style.height = '';

        ['large', 'medium', 'small'].forEach((cls) =>
            timeline.element.classList.remove(cls)
        );
        timeline.element.classList.add(button.text.toLowerCase());
    };

    return (
        <Fragment>
            <BryntumSchedulerProProjectModel
                ref={projectRef}
                {...projectProps}
            />
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <div className="demo-toolbar">
                <label>Timeline size: </label>
                <BryntumButtonGroup
                    toggleGroup={true}
                    items={[
                        {
                            text : 'Small'
                        },
                        {
                            text    : 'Medium',
                            pressed : true
                        },
                        {
                            text : 'Large'
                        }
                    ]}
                    onAction={setTimelineHeight}
                />
            </div>

            <div id="content">
                <BryntumTimeline
                    ref={timelineRef}
                    project={projectRef}
                />
                <BryntumSchedulerPro
                    project={projectRef}
                    {...schedulerConfig}
                />
            </div>
        </Fragment>
    );
};

export default App;


Toast.show({
    color : 'b-orange',
    html  : `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
    timeout : 10000
});
