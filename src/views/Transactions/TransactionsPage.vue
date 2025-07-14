<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
    <PageTitle title="Transactions" class="mb-(--figma-spacing-400)" />
    <div class="bg-white p-(--figma-spacing-400) rounded-lg">
        <DataTable :value="transactions" class="h-max" :globalFilterFields="['name', 'category', 'date', 'amount']">

            <Column field="name">
                <template #header><div class="text-preset-5 text-figma-grey-900">Recipient / Sender</div></template>
                <template #body="slotProps">
                    <div class="text-preset-4-bold text-figma-grey-900">
                        {{ slotProps.data.name }}
                    </div>
                </template>
            </Column>
            <Column field="category">
                <template #header><div class="text-preset-5 text-figma-grey-900">Category</div></template>
                <template #body="slotProps">
                    <div class="text-preset-5 text-figma-grey-500">{{ slotProps.data.category }}</div>
                </template>
            </Column>
            <Column field="date">
                <template #header><div class="text-preset-5 text-figma-grey-900">Transaction Date</div></template>
                <template #body="slotProps">
                    <div class="text-preset-5 text-figma-grey-500">
                        {{ slotProps.data.date }}
                    </div>
                </template>
            </Column>  
            <Column field="amount" style="width: 75px;">
                <template #header><div class="text-preset-5 text-figma-grey-900">Amount</div></template>
                <template #body="slotProps">
                    <div class="text-preset-4-bold text-right" :class="{ 'text-figma-green': slotProps.data.amount > 0, 'text-figma-red': slotProps.data.amount < 0 }">
                        {{ getFormattedAmount(slotProps.data.amount) }}
                    </div>
                </template>
            </Column>
        </DataTable>

    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DataTable, Column } from 'primevue';
import PageTitle from '@/components/PageTitle.vue';

const transactions = ref([
    { id: 1, name: 'Emma Richardson', category: 'General', amount: 75, date: '19 Aug 2024' },
    { id: 2, name: 'Savory Bites Bistro', category: 'Dining Out', amount: -55, date: '19 Aug 2024' },
    { id: 3, name: 'Daniel Carter', category: 'General', amount: 42.30, date: '18 Aug 2024' },
    { id: 4, name: 'Sun Park', category: 'General', amount: 120, date: '17 Aug 2024' },
    { id: 5, name: 'Urban Services Hub', category: 'General', amount: -65, date: '17 Aug 2024' }
]);

const getFormattedAmount = (amount: any) => {
    return amount > 0 ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`;
};

</script>


<style scoped>

</style>