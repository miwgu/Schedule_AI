<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { BryntumDemoHeader, BryntumSchedulerPro } from '@bryntum/schedulerpro-vue-3';
import { schedulerConfig, taskEditConfig } from './AppConfig';

import '@bryntum/demo-resources/scss/example.scss';
import '@bryntum/schedulerpro/schedulerpro.stockholm.css';

const config = reactive(schedulerConfig);

const scheduler = ref(null);

onMounted(() => {
    const schedulerInstance = (scheduler.value as any).instance.value;

    const { project } = schedulerInstance;

    project.on({
        // Display the editor when data is loaded
        async load() {
            // Await initial calculations
            await project.commitAsync();
            // <test>
            !document.location.search.includes('test') &&
            // </test>
            // Show the editor with 500 ms delay
            setTimeout(() => schedulerInstance.editEvent(schedulerInstance.eventStore.first, schedulerInstance.resourceStore.getById('weld')), 500);
        }
    });
});

</script>

<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <bryntum-scheduler-pro
        v-bind="config"
        ref="scheduler"
        group-feature="type"
        percent-bar-feature="true"
        :task-edit-feature="taskEditConfig"
    />
</template>

<style lang="scss">
@import './App.scss';
</style>
