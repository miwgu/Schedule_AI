<!-- Application -->
<template>
    <div id="container">
        <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
        <bryntum-demo-header />
        <bryntum-scheduler-pro
            v-bind="schedulerConfig"
        />
    </div>
</template>

<script>
import {
    BryntumSchedulerPro,
    BryntumDemoHeader
} from '@bryntum/schedulerpro-vue';
import { schedulerConfig } from '@/AppConfig';

export default {
    name : 'App',

    components : {
        BryntumSchedulerPro,
        BryntumDemoHeader
    },

    data() {
        return { schedulerConfig };
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
