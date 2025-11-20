<!--
 * Tasks component
 -->

<template>
    <div class="home">
        <bryntum-scheduler
            ref="tasks"
            v-bind="tasksConfig"
        />
    </div>
</template>

<script>
import { tasksConfig } from '@/AppConfig';
import { BryntumScheduler } from '@bryntum/schedulerpro-vue';
import { SchedulerResourceModel } from '@bryntum/schedulerpro';

// The data for this demo (data/data.json) uses the 'clients' property to hold children of resources
SchedulerResourceModel.childrenField = 'clients';

export default {
    data() {
        return {
            tasksConfig
        };
    },
    components : {
        BryntumScheduler
    }
};
</script>
