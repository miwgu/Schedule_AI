import { BryntumDemoHeader, BryntumSchedulerPro } from '@bryntum/schedulerpro-react';
import { schedulerProConfig } from './AppConfig';
import './App.scss';

function App() {

    return (
        <>
            <BryntumDemoHeader/>
            <BryntumSchedulerPro {...schedulerProConfig} />
        </>
    );
}

export default App;
