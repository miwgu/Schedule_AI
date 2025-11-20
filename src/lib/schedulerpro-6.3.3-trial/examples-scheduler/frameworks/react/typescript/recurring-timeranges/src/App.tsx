/**
 * Application
 */
import React, { Fragment, FunctionComponent, useCallback, useRef } from 'react';
import { BryntumButton, BryntumDemoHeader, BryntumScheduler } from '@bryntum/schedulerpro-react';
import { DateHelper, Button, Scheduler, Toast } from '@bryntum/schedulerpro';
import './App.scss';
import { schedulerConfig } from './AppConfig';
import { MyTimeRange } from './lib/MyTimeRange';

const App: FunctionComponent = () => {
    const schedulerRef = useRef<BryntumScheduler>(null);
    const schedulerInstance = () => schedulerRef.current?.instance as Scheduler;
    const coffeeButtonRef = useRef<BryntumButton>(null);
    const coffeeButtonInstance = () => coffeeButtonRef.current?.instance as Button;

    const coffeeClickHandler = useCallback(() => {
        const coffee = schedulerInstance().features.timeRanges.store.getById(1) as MyTimeRange;
        coffee.recurrenceRule = 'FREQ=WEEKLY;BYDAY=MO,TH;';
        coffeeButtonInstance().disabled = true;
    }, []);

    const prevClickHandler = useCallback(() => {
        schedulerInstance().shiftPrevious();
    }, []);

    const nextClickHandler = useCallback(() => {
        schedulerInstance().shiftNext();
    }, []);

    const todayClickHandler = useCallback(() => {
        const today = DateHelper.clearTime(new Date());
        today.setHours(5);
        schedulerInstance().setTimeSpan(today, DateHelper.add(today, 18, 'hour'));
    }, []);

    const startClickHandler = useCallback(() => {
        schedulerInstance().setTimeSpan(new Date(2019, 1, 7, 8), new Date(2019, 1, 29, 18));
    }, []);

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <div className="demo-toolbar">
                <BryntumButton
                    ref={coffeeButtonRef}
                    text="More coffee"
                    icon="b-fa-coffee"
                    tooltip="Click to add morning coffee to Thursdays too"
                    onClick={coffeeClickHandler}
                />
                <div className="spacer"></div>
                <BryntumButton
                    icon="b-fa-angle-left"
                    tooltip="View previous day"
                    onClick={prevClickHandler}
                />
                <BryntumButton
                    text="Today"
                    tooltip="View today, to see the current time line"
                    onClick={todayClickHandler}
                />
                <BryntumButton
                    icon="b-fa-angle-right"
                    tooltip="View next day"
                    onClick={nextClickHandler}
                />
                <BryntumButton
                    text="Start"
                    tooltip="Return to initial view"
                    onClick={startClickHandler}
                />
            </div>
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
