/**
 * Application
 */
import React, { FunctionComponent, Fragment, useRef, useEffect } from 'react';
import { BryntumScheduler, BryntumDemoHeader } from '@bryntum/schedulerpro-react';
import { Scheduler, Toast } from '@bryntum/schedulerpro';
import './App.scss';
import { schedulerConfig } from './AppConfig';

const App: FunctionComponent = () => {
    const schedulerRef = useRef<BryntumScheduler>(null);
    const schedulerInstance = () => schedulerRef.current?.instance as Scheduler;

    useEffect(() => {
        // This shows loading data
        // To load data automatically configure crudManager with `autoLoad : true`
        schedulerInstance().crudManager.load();
    });

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumScheduler
                ref={schedulerRef}
                {...schedulerConfig}
            />
        </Fragment>
    );
};

export default App;

// <test>
!document.location.search.includes('test') &&
// </test>
Toast.show({
    color : 'b-orange',
    html  : `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
    timeout : 10000
});
