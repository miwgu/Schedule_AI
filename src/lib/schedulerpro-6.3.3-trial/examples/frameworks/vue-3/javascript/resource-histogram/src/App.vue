<!-- Application -->
<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <div id="content">
        <div class="demo-toolbar align-right">
            <bryntum-checkbox
                id="feature-status-bar"
                text="Show bar texts"
                tooltip="Check to show resource allocation in the bars"
                :checked="false"
                @change="onCheckboxAction($event, 'showBarText')"
            />
            <bryntum-checkbox
                id="feature-max-effort"
                text="Show max allocation"
                tooltip="Check to display max resource allocation line"
                :checked="true"
                @change="onCheckboxAction($event, 'showMaxEffort')"
            />
            <bryntum-checkbox
                id="feature-bar-tip"
                text="Enable bar tooltip"
                tooltip="Check to show tooltips when moving mouse over bars"
                :checked="true"
                @change="onCheckboxAction($event, 'showBarTip')"
            />
            <div class="spacer" />
            <bryntum-button
                icon="b-icon b-icon-search-plus"
                tooltip="Zoom in"
                :hidden="true"
                @click="onZoom('zoomIn')"
            />
            <bryntum-button
                icon="b-icon b-icon-search-minus"
                tooltip="Zoom out"
                :hidden="true"
                @click="onZoom('zoomOut')"
            />
        </div>
        <bryntum-scheduler-pro
            ref="scheduler"
            :project="project"
            v-bind="schedulerConfig"
        />
        <bryntum-splitter />
        <bryntum-resource-histogram
            ref="histogram"
            :project="project"
            v-bind="histogramConfig"
        />
        <div class="demo-toolbar" />
    </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';

import {
    BryntumButton,
    BryntumCheckbox,
    BryntumDemoHeader,
    BryntumResourceHistogram,
    BryntumSchedulerPro,
    BryntumSplitter
} from '@bryntum/schedulerpro-vue-3';
import { useHistogramConfig, useSchedulerConfig, project } from '@/AppConfig';

// App
export default {
    name : 'App',

    // local components
    components : {
        BryntumDemoHeader,
        BryntumSchedulerPro,
        BryntumResourceHistogram,
        BryntumButton,
        BryntumSplitter,
        BryntumCheckbox
    },

    setup() {
        const scheduler = ref(null);
        const histogram = ref(null);

        const onZoom = action => {
            scheduler.value.instance.value[action]();
        };

        const onCheckboxAction = ({ source }, option) => {
            histogram.value.instance.value[option] = source.checked;
        };

        onMounted(() => {
            histogram.value.instance.value.addPartner(scheduler.value.instance.value);
        });

        return {
            schedulerConfig : reactive(useSchedulerConfig()),
            histogramConfig : reactive(useHistogramConfig()),
            scheduler,
            histogram,
            onZoom,
            onCheckboxAction,
            project
        };
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
