<template>
    <h2 class="text-figma-grey-900 text-preset-1 sm:py-(--figma-spacing-100)">{{ title }}</h2>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>

<style scoped>


</style>