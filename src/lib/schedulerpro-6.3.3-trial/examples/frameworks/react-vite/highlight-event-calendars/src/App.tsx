import { useRef } from 'react';
import { BryntumDemoHeader, BryntumPanel, BryntumSchedulerPro, BryntumSplitter } from '@bryntum/schedulerpro-react';
import { Checkbox, type SchedulerProListenersTypes, SchedulerResourceModel, type SlideToggleListenersTypes } from '@bryntum/schedulerpro';
import { usePanelConfig, useSchedulerProConfig } from './AppConfig';
import TaskWithCalendar from './lib/TaskWithCalendar';
import './App.scss';

function App() {
    const
        schedulerProRef = useRef<BryntumSchedulerPro>(null),
        panelRef        = useRef<BryntumPanel>(null);

    // Helper method used to get available resources
    const getAvailableResources = (eventRecord: TaskWithCalendar) => {
        const schedulerPro = schedulerProRef.current!.instance;
        return schedulerPro.resourceStore.query((resourceRecord: { role: string }) => resourceRecord.role === eventRecord.requiredRole || !eventRecord.requiredRole);
    };

    // DragStart event on SchedulerPro: don't allow events that can only be assigned to a specific resource to be dragged to another resource
    const eventDragStart: SchedulerProListenersTypes['eventDragStart'] = ({ eventRecords }) => {
        const
            schedulerPro        = schedulerProRef.current!.instance,
            panel               = panelRef.current!.instance,
            constrainToResource = (panel.widgetMap.constrainToResource as Checkbox).checked,
            availableResources  = getAvailableResources(eventRecords[0] as TaskWithCalendar);

        schedulerPro.features.eventDrag.constrainDragToResource = constrainToResource || availableResources.length === 1;
    };

    // Selection change event on SchedulerPro
    const eventSelectionChange: SchedulerProListenersTypes['eventSelectionChange'] = () => {
        const
            schedulerPro          = schedulerProRef.current!.instance,
            { selectedRecords }   = schedulerPro,
            { calendarHighlight } = schedulerPro.features;

        if (!calendarHighlight.disabled && selectedRecords.length > 0) {
            calendarHighlight.highlightResourceCalendars(selectedRecords as SchedulerResourceModel[]);
        }
        else {
            calendarHighlight.unhighlightCalendars();
        }
    };

    // Change event on SlideToggle on Panel
    const onPanelSlideToggleChange: SlideToggleListenersTypes['change'] = ({ source }) => {
        const
            { checked }  = source,
            schedulerPro = schedulerProRef.current!.instance!,
            { features } = schedulerPro;

        switch (source.ref) {
            case 'enableDragDrop':
                features.eventDrag.disabled = !checked;
                break;
            case 'constrainToResource':
                features.eventDrag.constrainDragToResource = checked;
                break;
            case 'highlight':
                features.calendarHighlight.disabled = !checked;
                break;
            case 'snap':
                schedulerPro.snap = checked;
                break;
            default:
                break;
        }
    };

    // Pass methods used in useSchedulerConfig and save schedulerProConfig
    const schedulerProConfig = useSchedulerProConfig(getAvailableResources, eventDragStart, eventSelectionChange);
    // Pass methods used in usePanelConfig and save panelConfig
    const panelConfig        = usePanelConfig(onPanelSlideToggleChange);

    return (
        <>
            <BryntumDemoHeader/>
            <div id="content">
                <BryntumSchedulerPro
                    ref={schedulerProRef}
                    {...schedulerProConfig}
                />
                <BryntumSplitter/>
                <BryntumPanel
                    ref={panelRef}
                    {...panelConfig}
                />
            </div>
        </>
    );
}

export default App;
