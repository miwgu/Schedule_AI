<!-- Application -->
<template>
    <div id="container">
        <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
        <bryntum-demo-header />
        <div id="content">
            <div class="demo-toolbar align-right">
                <bryntum-checkbox
                    text="Show bar texts"
                    tooltip="Check to show resource allocation in the bars"
                    :checked="false"
                    @change="onCheckbox($event, 'showBarText')"
                />
                <bryntum-checkbox
                    text="Show max allocation"
                    tooltip="Check to display max resource allocation line"
                    :checked="true"
                    @change="onCheckbox($event, 'showMaxEffort')"
                />
                <bryntum-checkbox
                    text="Enable bar tooltip"
                    tooltip="Check to show tooltips when moving mouse over bars"
                    :checked="true"
                    @change="onCheckbox($event, 'showBarTip')"
                />
                <div class="spacer"></div>
                <bryntum-button
                    icon="b-icon b-icon-search-plus"
                    tooltip="Zoom in"
                    @click="onZoom('zoomIn')"
                    :hidden="true"
                />
                <bryntum-button
                    icon="b-icon b-icon-search-minus"
                    tooltip="Zoom out"
                    @click="onZoom('zoomOut')"
                    :hidden="true"
                />
            </div>
            <bryntum-scheduler-pro
                ref="scheduler"
                v-bind="schedulerConfig"
            />
            <bryntum-splitter/>
            <bryntum-resource-histogram
                ref="histogram"
                v-bind="histogramConfig"
            />
        </div>
    </div>
</template>

<script>
import {
    BryntumSchedulerPro,
    BryntumSplitter,
    BryntumResourceHistogram,
    BryntumDemoHeader,
    BryntumButton,
    BryntumCheckbox
} from '@bryntum/schedulerpro-vue';
import { schedulerConfig, histogramConfig } from '@/AppConfig';

export default {
    name : 'App',

    components : {
        BryntumDemoHeader,
        BryntumResourceHistogram,
        BryntumSchedulerPro,
        BryntumSplitter,
        BryntumButton,
        BryntumCheckbox
    },

    data() {
        return {
            schedulerConfig,
            histogramConfig
        };
    },

    mounted() {
        // Set partner for histogram to sync timeline
        this.$refs.histogram.instance.addPartner(this.$refs.scheduler.instance);
    },

    methods : {
        onCheckbox({ checked }, action) {
            this.$refs.histogram.instance[action] = checked;
        },
        onZoom(action) {
            this.$refs.scheduler.instance[action]();
        }
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
