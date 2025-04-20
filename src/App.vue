<template>
<OverviewPage />
<TransactionsPage />
<BudgetsPage />
<PotsPage />
<RecurringBillsPage />
</template>

<script setup lang="ts">
import OverviewPage from './views/Overview/OverviewPage.vue';
import TransactionsPage from './views/Transactions/TransactionsPage.vue';
import BudgetsPage from './views/Budgets/BudgetsPage.vue';
import PotsPage from './views/Pots/PotsPage.vue';
import RecurringBillsPage from './views/Recurring Bills/RecurringBillsPage.vue'; 
</script>

<style scoped>

</style>