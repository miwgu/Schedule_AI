/**
 * Application
 */
import React, { Fragment, useCallback, useRef } from 'react';

import {
    BryntumScheduler,
    BryntumDemoHeader,
    BryntumButton
} from '@bryntum/schedulerpro-react';
import { Toast } from '@bryntum/schedulerpro';
import { schedulerConfig } from './AppConfig';
import './App.scss';

const App = props => {
    const scheduler = useRef(null);

    const onPrintClick = useCallback(() => {
        scheduler.current.instance.print({
            exporterType : 'multipagevertical'
        });
    }, []);

    const [usePlainHTML, setUsePlainHTML] = React.useState(true);

    React.useEffect(() => {
        if (scheduler.current?.instance) {
            if (usePlainHTML) {
                scheduler.current.instance.features.eventTooltip.template =
                  () => {
                      return 'Simple html';
                  };
            }
            else {
                scheduler.current.instance.features.eventTooltip.template = () => {
                    return (
                        <div className='jsx'>JSX</div>
                    );
                };
            }
        }
    }, [usePlainHTML]);

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <div className="demo-toolbar align-right">
                <BryntumButton
                    text="Print"
                    cls="b-deep-orange b-raised"
                    onClick={onPrintClick}
                />
                <BryntumButton onClick={() => {
                    setUsePlainHTML(!usePlainHTML);
                }} text='Change Template'/>
            </div>
            <BryntumScheduler
                ref={scheduler}
                {...schedulerConfig}
                eventRenderer={({ eventRecord }) => <div>{eventRecord.name}</div>}
            />
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
