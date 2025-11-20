import React from 'react';
import { BryntumScheduler, BryntumDemoHeader } from '@bryntum/schedulerpro-react';
import { schedulerProps } from './AppConfig';

import './App.scss';

const App = () => {
    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            {/* Also required for sanity checks for this test example*/}
            <BryntumDemoHeader/>
            <BryntumScheduler
                {...schedulerProps}
            />
        </>
    );
};

export default App;
