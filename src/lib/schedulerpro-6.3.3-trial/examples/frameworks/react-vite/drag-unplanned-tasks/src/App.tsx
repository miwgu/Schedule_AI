import { useRef, useEffect, useState, useCallback } from 'react';
import { BryntumDemoHeader, BryntumGrid, BryntumSchedulerPro, BryntumSplitter, BryntumToolbar } from '@bryntum/schedulerpro-react';
import { SchedulerPro, Grid, SchedulerResourceModel } from '@bryntum/schedulerpro';
import { schedulerConfig, projectConfig, gridConfig } from './AppConfig';
import SchedulerToolbar from './components/SchedulerToolbar';
import GridToolbar from './components/GridToolbar';
import { Appointment } from './lib/Appointment';
import { Doctor } from './lib/Doctor';
import { Drag } from './lib/Drag';

import './App.scss';

function App() {
    const gridRef             = useRef<BryntumGrid>(null);
    const schedulerRef        = useRef<BryntumSchedulerPro>(null);
    const dragRef             = useRef<Drag>(null);
    const schedulerToolbarRef = useRef<BryntumToolbar>(null);

    const [grid, setGrid]                 = useState<Grid>();
    const [scheduler, setScheduler]       = useState<SchedulerPro>();
    const [toggleLayout, setToggleLayout] = useState(false);

    useEffect(() => {
        setScheduler(schedulerRef.current?.instance);
        setGrid(gridRef.current?.instance);
    }, [gridRef, schedulerRef]);

    useEffect(() => {
        if (!scheduler || !grid) {
            return;
        }
        const { project } = scheduler!;
        // Create a chained version of the event store as our store.
        // It will be filtered to only display events that lack of assignments.
        // Config for grouping requiredRole in ascending mode while webpage loads initially.
        const chainedStore = grid!.store = project.eventStore.chain(
            (eventRecord: Appointment) => !eventRecord.assignments.length,
            undefined,
            {
                groupers : [
                    {
                        field     : 'requiredRole',
                        ascending : true
                    }
                ]
            }
        );

        // When assignments change, update our chained store to reflect the changes.
        project.assignmentStore.on({
            change  : () => chainedStore.fillFromMaster(),
            thisObj : grid!
        });

        (dragRef as Drag).current = new Drag({
            grid         : grid!,
            schedule     : scheduler!,
            constrain    : false,
            outerElement : grid!.element
        });

    }, [grid, scheduler]);

    // We need to destroy Drag instance because React 18 Strict mode
    // runs this component twice in development mode and Drag has no
    // UI so it is not destroyed automatically as grid and scheduler.
    useEffect(() => {
        return () => (dragRef as Drag).current?.destroy?.();
    }, [dragRef]);

    const onSchedulerSelectionChange = useCallback(() => {
        const selectedRecords       = scheduler!.selectedRecords as SchedulerResourceModel[];
        const { calendarHighlight } = scheduler!.features;
        if (selectedRecords.length > 0) {
            calendarHighlight.highlightResourceCalendars(selectedRecords);
        }
        else {
            calendarHighlight.unhighlightCalendars();
        }
    }, [scheduler]);

    const onGridSelectionChange = useCallback(() => {
        const selectedRecords                       = grid!.selectedRecords as Appointment[];
        const { calendarHighlight }                 = scheduler!.features;
        const requiredRoles: Record<string, number> = {};

        selectedRecords.forEach((appointment: Appointment) => requiredRoles[appointment.requiredRole as string] = 1);

        if (Object.keys(requiredRoles).length === 1) {
            const appointment        = selectedRecords[0] as Appointment;
            const availableResources = scheduler!.resourceStore
                .query((doctor: Doctor) => doctor.role === appointment.requiredRole || !appointment.requiredRole) as SchedulerResourceModel[];
            calendarHighlight.highlightResourceCalendars(availableResources);
        }
        else {
            calendarHighlight.unhighlightCalendars();
        }
    }, [grid, scheduler]);

    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader/>
            <div id="content" className={toggleLayout ? '' : 'b-side-by-side'}>
                <div className="scheduler-container">
                    <SchedulerToolbar
                        ref={schedulerToolbarRef}
                        schedulerRef={schedulerRef}
                        toggleLayout={toggleLayout}
                        setToggleLayout={setToggleLayout}
                    />
                    <BryntumSchedulerPro
                        ref={schedulerRef}
                        cls="b-schedulerpro"
                        {...schedulerConfig}
                        project={projectConfig}
                        onSelectionChange={onSchedulerSelectionChange}
                    />
                </div>
                <BryntumSplitter/>
                <div className="grid-container">
                    <GridToolbar
                        gridRef={gridRef}
                    />
                    <BryntumGrid
                        ref={gridRef}
                        cls="b-unplannedgrid"
                        {...gridConfig}
                        onSelectionChange={onGridSelectionChange}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
