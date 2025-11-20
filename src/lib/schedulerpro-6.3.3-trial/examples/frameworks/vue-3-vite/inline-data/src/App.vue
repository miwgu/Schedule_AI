<script setup lang="ts">
import { reactive, ref } from 'vue';
import { BryntumDemoHeader, BryntumSchedulerPro, BryntumSchedulerProProjectModel } from '@bryntum/schedulerpro-vue-3';
import { projectProps, schedulerProProps } from './AppConfig';

const
    projectRef         = ref<typeof BryntumSchedulerProProjectModel>(null),
    schedulerProRef    = ref<typeof BryntumSchedulerPro>(null),
    schedulerProConfig = reactive(schedulerProProps),
    projectConfig      = reactive(projectProps);
</script>

<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <bryntum-scheduler-pro-project-model
        ref="projectRef"
        v-bind="projectConfig"
    />
    <bryntum-scheduler-pro
        ref="schedulerProRef"
        v-bind="schedulerProConfig"
        :project="projectRef"
    />
</template>

<style lang="scss">
@import './App.scss';
</style>
