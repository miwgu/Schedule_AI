/**
 * The App file. It should stay as simple as possible
 */
import React, { Fragment } from 'react';
import {
    BryntumScheduler,
    BryntumDemoHeader
} from '@bryntum/schedulerpro-react';
import { Toast } from '@bryntum/schedulerpro';
import { schedulerConfig } from './AppConfig';
import './App.scss';

const App = () => {
    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumScheduler
                {...schedulerConfig}
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
