import { Fragment } from 'react';

import { BryntumDemoHeader, BryntumSchedulerPro } from '@bryntum/schedulerpro-react';

import { schedulerConfig } from './AppConfig';
import '@bryntum/demo-resources/scss/example.scss';

function App() {
    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumSchedulerPro
                {...schedulerConfig}
            />
        </Fragment>
    );
}

export default App;
