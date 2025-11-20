<script setup lang="ts">

import { BryntumToolbar } from '@bryntum/schedulerpro-vue-3';
import { DateHelper, Toast  } from '@bryntum/schedulerpro';

// Some variables used in this demo
const startHour = 7;
const endHour = 20;

const props = defineProps({
    onToggleLayout : {
        type    : Function,
        default : () => {}
    },
    schedulerProRefFn : {
        type    : Function,
        default : () => {}
    }
});

const onSave = () => {
    Toast.show('TODO: Save data (see onSave() event for SchedulerPro)');
};

const onSelect = ({ record }: { record: any }) => {
    const schedulerPro = props.schedulerProRefFn().value.instance.value;
    if (schedulerPro) {
        const value = record.value;
        const startDate = DateHelper.add(DateHelper.clearTime(schedulerPro.startDate), startHour, 'h');
        const endDate = DateHelper.add(startDate, value - 1, 'd');

        endDate.setHours(endHour);
        schedulerPro.viewPreset = record.preset;
        schedulerPro.setTimeSpan(startDate, endDate);
        // reset scroll
        schedulerPro.scrollLeft = 0;
    }
};

const onShiftPrevious = () => {
    const schedulerPro = props.schedulerProRefFn().value.instance.value;
    schedulerPro!.shiftPrevious();
};

const onShiftNext = () => {
    const schedulerPro = props.schedulerProRefFn().value.instance.value;
    schedulerPro!.shiftNext();
};

const onClickToday = () => {
    const schedulerPro = props.schedulerProRefFn().value.instance.value;
    const startDate = DateHelper.clearTime(new Date());
    schedulerPro!.setTimeSpan(DateHelper.add(startDate, startHour, 'h'), DateHelper.add(startDate, endHour, 'h'));
};

const SchedulerTbarConfig = {
    items : [
        {
            text     : 'Save',
            width    : 100,
            cls      : 'b-raised b-blue',
            ref      : 'saveButton',
            disabled : true,
            onAction : onSave
        },
        {
            type         : 'combo',
            ref          : 'preset',
            editable     : false,
            label        : 'Show',
            value        : 1,
            valueField   : 'value',
            displayField : 'name',
            items        : [
                {
                    name   : '1 day',
                    value  : 1,
                    preset : {
                        base      : 'hourAndDay',
                        tickWidth : 45
                    }
                },
                {
                    name   : '3 days',
                    value  : 3,
                    preset : {
                        base : 'dayAndWeek'
                    }
                },
                {
                    name   : '1 week',
                    value  : 7,
                    preset : {
                        base : 'dayAndWeek'
                    }
                }
            ],
            onSelect
        },
        {
            type  : 'buttonGroup',
            style : 'margin-inline:auto',
            items : [
                {
                    icon     : 'b-icon b-fa-chevron-left',
                    cls      : 'b-transparent',
                    onAction : onShiftPrevious
                },
                {
                    type     : 'button',
                    text     : 'Today',
                    cls      : 'b-transparent',
                    onAction : onClickToday
                },
                {
                    icon     : 'b-icon b-fa-chevron-right',
                    cls      : 'b-transparent',
                    onAction : onShiftNext
                }
            ]
        },
        {
            icon       : 'b-fa b-fa-columns',
            tooltip    : 'Toggle layout',
            cls        : 'b-transparent',
            ref        : 'toggle-layout', // for testing purpose
            toggleable : true,
            onAction   : props.onToggleLayout
        }
    ]
};

</script>

<template>
    <bryntum-toolbar
        v-bind="SchedulerTbarConfig"
    />
</template>
