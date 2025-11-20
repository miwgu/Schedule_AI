<script setup lang="ts">
import { BryntumToolbar } from '@bryntum/schedulerpro-vue-3';

const props = defineProps({
    gridRefFn : {
        type    : Function,
        default : () => {}
    }
});

const onExpandAll = () => {
    const grid = props.gridRefFn().value.instance.value;
    grid!.expandAll();
};

const onCollapseAll = () => {
    const grid = props.gridRefFn().value.instance.value;
    grid!.collapseAll();
};

const GridTbarConfig = {
    items : [
        {
            type : 'widget',
            tag  : 'strong',
            html : 'Unplanned appointments',
            flex : 1
        },
        {
            icon     : 'b-fa b-fa-angle-double-down',
            ref      : 'expand-all', // for testing purpose
            cls      : 'b-transparent',
            tooltip  : 'Expand all groups',
            onAction : onExpandAll
        },
        {
            icon     : 'b-fa b-fa-angle-double-up',
            ref      : 'collapse-all', // for testing purpose
            cls      : 'b-transparent',
            tooltip  : 'Collapse all groups',
            onAction : onCollapseAll
        }
    ]
};

</script>

<template>
    <bryntum-toolbar
        v-bind="GridTbarConfig"
    />
</template>
