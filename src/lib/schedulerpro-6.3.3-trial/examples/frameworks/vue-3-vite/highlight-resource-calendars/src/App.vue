<script setup lang="ts">
import { reactive, ref } from 'vue';
import { BryntumDemoHeader, BryntumPanel, BryntumSchedulerPro, BryntumSplitter } from '@bryntum/schedulerpro-vue-3';
import {
    type Checkbox, type Panel, type SchedulerPro, type SchedulerProListenersTypes, SchedulerResourceModel, type SlideToggleListenersTypes
} from '@bryntum/schedulerpro';
import { useCalendarHighlightConfig, useEventDragConfig, useEventTooltipConfig, usePanelConfig, useSchedulerProConfig } from './AppConfig';
import type Appointment from './lib/Appointment';

class AppResourceModel extends SchedulerResourceModel {
    declare role: string;
}

// Helper method used to get available resources
const getAvailableResources = (eventRecord : Appointment) => {
    const schedulerPro = schedulerProRef.value.instance.value as SchedulerPro;

    return schedulerPro.resourceStore.query((resourceRecord : AppResourceModel) =>
        resourceRecord.role === eventRecord.requiredRole || !eventRecord.requiredRole);
};

// Don't allow events that can only be assigned to a specific resource to be dragged to another resource
const eventDragStart : SchedulerProListenersTypes['eventDragStart'] = ({ eventRecords }) => {
    const
        panel               = panelRef.value.instance.value as Panel,
        schedulerPro        = schedulerProRef.value.instance.value as SchedulerPro,
        constrainToResource = (panel.widgetMap.constrainToResource as Checkbox).checked,
        availableResources  = getAvailableResources(eventRecords[0] as Appointment);

    schedulerPro.features.eventDrag.constrainDragToResource = constrainToResource || availableResources.length === 1;
};

// Selection change event on SchedulerPro
const selectionChange = () => {
    const
        schedulerPro          = schedulerProRef.value.instance.value as SchedulerPro,
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
    schedulerProConfig      = reactive(useSchedulerProConfig(eventDragStart, selectionChange)),
    calendarHighlightConfig = reactive(useCalendarHighlightConfig(getAvailableResources)),
    eventDragConfig         = reactive(useEventDragConfig(getAvailableResources)),
    eventTooltipConfig      = reactive(useEventTooltipConfig()),
    panelConfig             = reactive(usePanelConfig(onSlideToggleChange)),
    schedulerProRef         = ref(null),
    panelRef                = ref(null);

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
