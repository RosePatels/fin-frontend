<template>
<div class="md:h-screen">
    <div class="bg-figma-beige-100 flex">
        <DesktopSidebar class="hidden md:block h-full"/>
        <div class="bg-figma-beige-100 router-view-container h-[calc(100vh-51px)] sm:h-[calc(100vh-78px)] md:h-screen w-full">
            <RouterView />
        </div>
    </div>
    <div class="bg-figma-beige-100 block md:hidden">
        <TabletFooter class="hidden sm:block"/>
        <MobileFooter class="sm:hidden" />
    </div>
</div>
</template>

<script setup lang="ts">
import MobileFooter from './views/Navigation/MobileFooter.vue';
import TabletFooter from './views/Navigation/TabletFooter.vue';
import DesktopSidebar from './views/Navigation/DesktopSidebar.vue';
</script>

<style scoped>
.router-view-container {
    overflow: auto;
}
</style>