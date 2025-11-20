<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { Checkbox, Panel, SchedulerPro, SchedulerProListenersTypes, SlideToggleListenersTypes } from '@bryntum/schedulerpro';
import { BryntumDemoHeader, BryntumPanel, BryntumSchedulerPro, BryntumSplitter } from '@bryntum/schedulerpro-vue-3';
import {
    useCalendarHighlightConfig, useEventDragConfig, useEventTooltipConfig, usePanelConfig, useSchedulerProConfig, useTaskEditConfig
} from './AppConfig';
import type TaskWithCalendar from './lib/TaskWithCalendar';

// DragStart event on SchedulerPro: Don't allow events that can only be assigned to a specific resource to be dragged to another resource
const eventDragStart : SchedulerProListenersTypes['eventDragStart'] = ({ eventRecords }) => {
    const
        schedulerPro        = schedulerProRef.value.instance!.value as SchedulerPro,
        panel               = panelRef.value.instance.value as Panel,
        constrainToResource = (panel.widgetMap.constrainToResource as Checkbox).checked,
        availableResources  = getAvailableResources(eventRecords[0] as TaskWithCalendar);

    schedulerPro.features.eventDrag.constrainDragToResource = constrainToResource || availableResources.length === 1;
};

// Selection change event on SchedulerPro
const eventSelectionChange : SchedulerProListenersTypes['eventSelectionChange'] = () => {
    const
        schedulerPro          = schedulerProRef.value.instance.value,
        { selectedEvents }    = schedulerPro,
        { calendarHighlight } = schedulerPro.features;

    if (!calendarHighlight.disabled && selectedEvents!.length > 0) {
        calendarHighlight.highlightEventCalendars(selectedEvents);
    }
    else {
        calendarHighlight.unhighlightCalendars();
    }
};

// Helper method used to get available resources
const getAvailableResources = (eventRecord: TaskWithCalendar) => {
    const schedulerPro = schedulerProRef.value.instance.value;
    return schedulerPro.resourceStore.query((resourceRecord : { role : string; }) => resourceRecord.role === eventRecord.requiredRole || !eventRecord.requiredRole);
};

// Change event on SlideToggle on Panel
const onSlideToggleChange: SlideToggleListenersTypes['change'] = ({ source }) => {
    const
        schedulerPro = (schedulerProRef.value.instance.value as SchedulerPro)!,
        { features } = schedulerPro,
        { checked }  = source;

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

const
    schedulerProConfig      = reactive(useSchedulerProConfig(eventDragStart, eventSelectionChange)),
    calendarHighlightConfig = reactive(useCalendarHighlightConfig(getAvailableResources)),
    eventDragConfig         = reactive(useEventDragConfig(getAvailableResources)),
    eventTooltipConfig      = reactive(useEventTooltipConfig()),
    taskEditConfig          = reactive(useTaskEditConfig()),
    panelConfig             = reactive(usePanelConfig(onSlideToggleChange)),

    schedulerProRef = ref(null),
    panelRef        = ref(null);

</script>

<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <div id="content">
        <bryntum-scheduler-pro
            ref="schedulerProRef"
            v-bind="schedulerProConfig"
            :calendar-highlight-feature="calendarHighlightConfig"
            :event-drag-feature="eventDragConfig"
            :event-tooltip-feature="eventTooltipConfig"
            :task-edit-feature="taskEditConfig"
            :schedule-tooltip-feature="false"
            :dependencies-feature="false"
            :filter-bar-feature="true"
        />
        <bryntum-splitter />
        <bryntum-panel
            ref="panelRef"
            v-bind="panelConfig"
        />
    </div>
</template>

<style lang="scss">
@import './App.scss';
</style>
