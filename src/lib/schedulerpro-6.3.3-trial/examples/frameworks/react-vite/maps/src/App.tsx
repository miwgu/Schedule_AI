import { useEffect, useRef, useState } from 'react';
import { BryntumDemoHeader, BryntumGrid, BryntumSchedulerPro, BryntumSchedulerProProjectModel, BryntumSplitter } from '@bryntum/schedulerpro-react';
import { AssignmentStore, EventStore, TimeAxis, ButtonListenersTypes, DateField, DateFieldListenersTypes, DateHelper, DragHelperConfig, FilterFieldListenersTypes, GridListenersTypes, ProjectModel, ProjectModelListenersTypes, SchedulerProListenersTypes, SlideToggleListenersTypes, StoreChainedClass, SlideToggle, Splitter } from '@bryntum/schedulerpro';
import { schedulerProProps, projectProps, gridProps } from './AppConfig';
import './App.scss';
import Task from './lib/Task';
import Drag from './lib/Drag';
import MapPanel from './lib/MapPanel';

function App() {
    const
        schedulerProRef         = useRef<BryntumSchedulerPro>(null),
        projectRef              = useRef<BryntumSchedulerProProjectModel>(null),
        gridRef                 = useRef<BryntumGrid>(null),
        [mapPanel, setMapPanel] = useState<MapPanel>(),
        [unplannedSplitter, setUnplannedSplitter] = useState<Splitter>();

    const onEventClick : SchedulerProListenersTypes['eventClick'] = ({ eventRecord }) => {
        const task = eventRecord as Task;
        if (task.marker) {
            mapPanel?.showTooltip(task, true);
        }
    };

    const onAfterEventSave: SchedulerProListenersTypes['afterEventSave'] = ({ eventRecord }) => {
        const task = eventRecord as Task;
        if (task.marker) {
            mapPanel?.scrollMarkerIntoView?.(task);
        }
    };

    const onDateFieldChange : DateFieldListenersTypes['change'] = ({ value, userAction }) => {
        if (userAction) {
            const
                startTime = DateHelper.add(value, 8, 'hour'),
                endTime   = DateHelper.add(value, 20, 'hour');

            schedulerProRef.current?.instance.setTimeSpan(startTime, endTime);
        }
    };

    const onNewEventClick : ButtonListenersTypes['click'] = () => {
        const newTask = new (projectRef.current?.instance as ProjectModel).eventStore.modelClass({
            startDate : schedulerProRef.current?.instance.startDate
        });

        schedulerProRef.current?.instance.editEvent(newTask);
    };

    const onFilterChange : FilterFieldListenersTypes['change'] = ({ value }) => {
        const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        schedulerProRef.current?.instance.eventStore.filter({
            filters : (event: Task) => new RegExp(escapedValue, 'i').test(event.name),
            replace : true
        });
    };

    const onToggleUnscheduled : SlideToggleListenersTypes['change'] = ({ value }) => {
        schedulerProRef.current?.instance.trigger('toggleUnscheduled', { value });
    };

    const onUnplannedSplitterToggle = ({ eventName }: { eventName: string }): void => {
        const slideToggle = schedulerProRef.current?.instance.widgetMap['toggleUnscheduled'] as SlideToggle;
        slideToggle.value = eventName === 'splitterCollapseClick';
    };

    const onChange : ProjectModelListenersTypes['change'] = ({ store, action }) => {
        if (store instanceof AssignmentStore) {
            if (action !== 'dataset') {
                (gridRef.current?.instance.store as StoreChainedClass).fillFromMaster();
            }
        }
    };

    const onMarkerClick = async({ eventRecord } : { eventRecord : Task }) => {
        if (eventRecord.resources.length > 0 && schedulerProRef.current?.instance) {
            await schedulerProRef.current.instance.scrollEventIntoView(eventRecord, { animate : true, highlight : true });
            schedulerProRef.current.instance.selectedEvents = [eventRecord];
        }
        else {
            await (gridRef.current?.instance as any).expand();
            (schedulerProRef.current?.instance.widgetMap['toggleUnscheduled'] as SlideToggle).value = true;
            gridRef.current?.instance.scrollRowIntoView(eventRecord, { animate : true, highlight : true });
        }
    };

    useEffect(() => {
        if (unplannedSplitter) {
            unplannedSplitter.on({
                splitterExpandClick   : onUnplannedSplitterToggle,
                splitterCollapseClick : onUnplannedSplitterToggle
            });
        }
    }, [unplannedSplitter]);

    // useEffect intenionally runs only once on initialization
    useEffect(() => {
        const schedulerPro = schedulerProRef.current?.instance;
        if (schedulerPro) {
            (schedulerPro.widgetMap['dateField'] as DateField).value = schedulerPro.startDate;
            schedulerPro.widgetMap['dateField'].on('change', onDateFieldChange);
            schedulerPro.widgetMap['newEventButton'].on('click', onNewEventClick);
            schedulerPro.widgetMap['filterByName'].on('change', onFilterChange);
            schedulerPro.widgetMap['toggleUnscheduled'].on('change', onToggleUnscheduled);
            schedulerPro.on('toggleUnscheduled', ({ value } : { value : boolean }) => {
                gridRef.current?.instance.toggleCollapsed(!value);
            });
        }

        const mapPanel = new MapPanel({
            ref         : 'map',
            appendTo    : 'content',
            flex        : 3,
            collapsible : true,
            header      : false,
            eventStore  : schedulerProRef.current?.instance.eventStore as EventStore,
            timeAxis    : schedulerProRef.current?.instance.timeAxis as TimeAxis,
            listeners   : {
                markerclick : onMarkerClick
            }
        });

        setMapPanel(mapPanel);

        new Drag({
            grid         : gridRef.current?.instance,
            schedule     : schedulerProRef.current?.instance,
            constrain    : false,
            outerElement : gridRef.current?.instance.element
        } as DragHelperConfig);

        // Destroy the map panel when the component unmounts
        return () => {
            mapPanel.destroy?.();
        };
    }, []);

    const onCellClick : GridListenersTypes['cellClick'] = ({ record }) => {
        const task = record as Task;
        if (task.marker) {
            mapPanel?.showTooltip(task, true);
        }
    };

    const onLoad : ProjectModelListenersTypes['load'] = () => {
        if (projectRef.current?.instance && gridRef.current?.instance) {
            gridRef.current.instance.store = projectRef.current.instance.eventStore.chain((eventRecord : Task) => !eventRecord.assignments.length);
            gridRef.current.instance.store.sort('name');
        }
    };

    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumSchedulerProProjectModel
                ref={projectRef}
                onLoad={onLoad}
                onChange={onChange}
                {...projectProps}
            />
            <div id='content' className='b-side-by-side'>
                <BryntumSchedulerPro
                    ref={schedulerProRef}
                    project={projectRef}
                    onEventClick={onEventClick}
                    onAfterEventSave={onAfterEventSave}
                    {...schedulerProProps}
                />
                <BryntumSplitter showButtons={true} />
            </div>
            {gridRef.current?.instance &&
                <BryntumSplitter
                    showButtons="end"
                    onPaint={({ firstPaint, source }) => {
                        if (firstPaint) {
                            setUnplannedSplitter(source as Splitter);
                        }
                    }}
                />
            }
            <BryntumGrid
                ref={gridRef}
                {...gridProps}
                onCellClick={onCellClick}
            />
        </>
    );
}

export default App;
