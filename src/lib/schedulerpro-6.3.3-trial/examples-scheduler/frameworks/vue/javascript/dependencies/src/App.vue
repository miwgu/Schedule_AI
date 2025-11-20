<!-- Application -->
<template>
    <div id="container">
        <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
        <bryntum-demo-header />
        <bryntum-scheduler
            ref="scheduler"
            v-bind="schedulerConfig"
        />
    </div>
</template>

<script>
import {
    BryntumScheduler,
    BryntumDemoHeader
} from '@bryntum/schedulerpro-vue';
import { schedulerConfig } from './AppConfig';

export default {
    name : 'app',

    components : {
        BryntumDemoHeader,
        BryntumScheduler
    },

    data() {
        return {
            schedulerConfig
        };
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
