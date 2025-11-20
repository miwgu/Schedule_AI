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
