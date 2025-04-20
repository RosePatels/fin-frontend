<template>
<div class="router-view-container">
    <RouterView />
</div>
<div class="bg-figma-beige-100">
    <MobileFooter />
</div>
</template>

<script setup lang="ts">
import OverviewPage from './views/Overview/OverviewPage.vue';
import TransactionsPage from './views/Transactions/TransactionsPage.vue';
import BudgetsPage from './views/Budgets/BudgetsPage.vue';
import PotsPage from './views/Pots/PotsPage.vue';
import RecurringBillsPage from './views/Recurring Bills/RecurringBillsPage.vue'; 
import MobileFooter from './views/Navigation/MobileFooter.vue';
</script>

<style scoped>
.router-view-container {
    overflow: scroll;
    height: calc(100vh - 50px);
}
</style>