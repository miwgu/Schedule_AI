<template>
    <div>
        <img
            class="b-resource-image b-resource-avatar big-avatar"
            :src="`users/${record.name.toLowerCase()}.jpg`"
        >
        <div>Experience: <strong>{{ record.years }} years</strong></div>
    </div>
</template>

<script setup lang="ts">
import { Developer } from '../lib/Developer';

interface Props {
    record: Developer;
}

withDefaults(defineProps<Props>(), {
    record : () => new Developer()
});
</script>

<style lang="css">
.big-avatar {
    width  : 8em;
    height : 8em;
    margin : auto auto 1em;
}
</style>
