<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { type ButtonListenersTypes, type EventStoreListenersTypes } from '@bryntum/schedulerpro';
import { BryntumButton, BryntumDemoHeader, BryntumGrid, BryntumScheduler, BryntumSplitter } from '@bryntum/schedulerpro-vue-3';
import { Drag } from './lib/Drag';
import { Task } from './lib/Task';
import { TaskStore } from './lib/TaskStore';
import { gridConfig, useSchedulerConfig } from '@/AppConfig';

const
    autoReschedule = ref<Boolean>(false),
    schedulerRef   = ref<typeof BryntumScheduler>(),
    getScheduler   = () => schedulerRef.value!.instance.value,
    gridRef        = ref<typeof BryntumGrid>(),
    getGrid        = () => gridRef.value!.instance.value;

// Handle the button click
const onAutoReschedule: ButtonListenersTypes['action'] = ({ source }) => {
    autoReschedule.value = source.pressed;
};

// specific to this example - reschedules the tasks
const onEventStoreUpdate : EventStoreListenersTypes['update'] = ({
    record,
    changes
}) => {
    const
        scheduler = getScheduler(),
        grid      = getGrid();

    if (autoReschedule.value) {
        (scheduler.eventStore as TaskStore).rescheduleOverlappingTasks((record as Task));
    }

    if ('resourceId' in changes && !(record as Task).resourceId) {
        scheduler.eventStore.remove(record);
        grid.store.add(record);
    }
};

// specific to this example - reschedules the tasks
const onEventStoreAdd : EventStoreListenersTypes['add'] = ({
    records
}) => {
    const scheduler = getScheduler();

    if (autoReschedule.value) {
        (records as Task[]).forEach((eventRecord) =>
            (scheduler.eventStore as TaskStore).rescheduleOverlappingTasks(
                eventRecord
            )
        );
    }
};
onMounted(() => {
    const
        scheduler = getScheduler(),
        grid      = getGrid();

    new Drag({
        grid,
        schedule     : scheduler,
        constrain    : false,
        outerElement : grid.element
    });
});

const schedulerConfig = reactive(useSchedulerConfig({ onEventStoreAdd, onEventStoreUpdate }));

</script>

<template>
    <bryntum-demo-header />

    <div className="demo-toolbar align-right">
        <bryntum-button
            tooltip="Toggles whether to automatically reschedule overlapping tasks"
            icon="b-fa b-fa-calendar"
            :toggleable="true"
            text="Auto reschedule"
            @action="onAutoReschedule as ButtonListenersTypes['action']"
        />
    </div>

    <div class="content-container">
        <bryntum-scheduler
            ref="schedulerRef"
            v-bind="schedulerConfig"
        />
        <bryntum-splitter />
        <bryntum-grid
            ref="gridRef"
            v-bind="gridConfig"
        />
    </div>
</template>

<style lang="scss">
@import "./App.scss";
</style>
