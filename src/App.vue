<template>
<div class="router-view-container h-[calc(100vh-51px)] sm:h-[calc(100vh-78px)]">
    <RouterView />
</div>
<div class="bg-figma-beige-100">
    <TabletFooter class="hidden sm:block"/>
    <MobileFooter class="sm:hidden" />
</div>
</template>

<script setup lang="ts">
import MobileFooter from './views/Navigation/MobileFooter.vue';
import TabletFooter from './views/Navigation/TabletFooter.vue';
</script>

<style scoped>
.router-view-container {
    overflow: scroll;
}

.router-view-sm-height {
    height: calc(100vh - 50px);
}

.router-view-md-height {
    height: calc(100v - 74px);
}
</style>