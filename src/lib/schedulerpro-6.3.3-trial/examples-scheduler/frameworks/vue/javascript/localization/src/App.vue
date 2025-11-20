<!-- Application -->
<template>
    <div id="container">
        <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
        <bryntum-demo-header
            :title="$t('title')"
        />
        <div class="demo-toolbar align-right">
            <locale-combo />
        </div>
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
import { schedulerConfig } from './AppConfig.js';
import LocaleCombo from './components/LocaleCombo';

// import Bryntum locales
import './locales/index.js';

export default {
    name : 'App',

    components : {
        BryntumDemoHeader,
        BryntumScheduler,
        LocaleCombo
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
