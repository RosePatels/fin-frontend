<template>
<header>
    <h2>Budgets</h2>
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

<MobileFooter />
</template>

<script setup lang="ts">
import MobileFooter from '../Navigation/MobileFooter.vue';
</script>

<style scoped>

</style>