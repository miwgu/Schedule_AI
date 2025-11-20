/**
 * Application
 */
import React, { Fragment, FunctionComponent, useRef, useEffect } from 'react';

import { BryntumDemoHeader, BryntumSchedulerPro } from '@bryntum/schedulerpro-react';
import { Toast } from '@bryntum/schedulerpro';
import { schedulerProConfig } from './AppConfig';
import './App.scss';

const App: FunctionComponent = () => {
    const schedulerProRef = useRef<BryntumSchedulerPro>(null);
    const schedulerProInstance = () => schedulerProRef.current?.instance;

    useEffect(() => {
        // This shows loading data
        // To load data automatically configure project with `autoLoad : true`
        schedulerProInstance()?.project.load();
    });

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumSchedulerPro
                ref={schedulerProRef}
                {...schedulerProConfig}
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
