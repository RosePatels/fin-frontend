<template>
    <div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
        <header>
            <PageTitle title="Recurring Bills" />
            <button>Add new budget</button>
        </header>
        
        <div>
            <div>Icon</div>
            <div>
                <div>Total bills</div>
                <div>$384.98</div>
            </div>
        </div>
        
        <div>
            <div>Summary</div>
        
            <div>
                <div>Paid Bills</div>
                <div>2 ($320.00)</div>
            </div>
            <div>
                <div>Total Upcoming</div>
                <div>6 ($1,230.00)</div>
            </div>
            <div>
                <div>Due Soon</div>
                <div>2 ($40.00)</div>
            </div>
        </div>
        
        <div>
            Grid
        </div>
    </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';

</script>

<style scoped>

</style>