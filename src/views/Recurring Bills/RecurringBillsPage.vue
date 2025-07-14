<template>
    <div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
        <header class="mb-(--figma-spacing-400)">
            <PageTitle title="Recurring Bills" />
        </header>
        
        <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1 md:gap-5">
                <div class="col-start-1 bg-figma-grey-900 rounded-lg max-h-max text-white p-(--figma-spacing-300) min-h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" fill="none"><path fill="#fff" d="M24.438 10.25a.938.938 0 0 1-.938.938h-15a.938.938 0 0 1 0-1.876h15a.937.937 0 0 1 .938.938zm-.938 4.063h-15a.938.938 0 0 0 0 1.874h15a.938.938 0 0 0 0-1.875zM31.938 2.75V26.5a.938.938 0 0 1-1.357.84L26 25.047l-4.581 2.291a.938.938 0 0 1-.838 0L16 25.05l-4.581 2.29a.938.938 0 0 1-.838 0L6 25.05l-4.581 2.29a.938.938 0 0 1-1.356-.84V2.75A2.188 2.188 0 0 1 2.25.562h27.5a2.187 2.187 0 0 1 2.188 2.188zm-1.875 0a.312.312 0 0 0-.313-.313H2.25a.312.312 0 0 0-.313.313v22.233l3.644-1.822a.938.938 0 0 1 .838 0L11 25.45l4.581-2.29a.938.938 0 0 1 .838 0L21 25.45l4.581-2.29a.938.938 0 0 1 .838 0l3.643 1.822z"/></svg>
                    <div class="mt-(--figma-spacing-400)">
                        <div class="text-preset-4">Total bills</div>
                        <div class="text-preset-1 pt-(--figma-spacing-150)">$384.98</div>
                    </div>
                </div>
                
                <div class="max-h-max mt-(--figma-spacing-300) sm:mt-0 bg-white rounded-lg p-(--figma-spacing-250)">
                    <div class="text-preset-3 text-figma-grey-900 mb-(--figma-spacing-250)">Summary</div>
                
                    <div class="flex justify-between items-center pb-(--figma-spacing-200) border-b border-figma-grey-500/15">
                        <div class="text-preset-5 text-figma-grey-500">Paid Bills</div>
                        <div class="text-preset-5-bold text-figma-grey-900">2 ($320.00)</div>
                    </div>

                    <div class="flex justify-between items-center pb-(--figma-spacing-200) mt-(--figma-spacing-200) border-b border-figma-grey-500/15">
                        <div class="text-preset-5 text-figma-grey-500">Total Upcoming</div>
                        <div class="text-preset-5-bold text-figma-grey-900">6 ($1,230.00)</div>
                    </div>

                    <div class="flex justify-between items-center mt-(--figma-spacing-200)">
                        <div class="text-preset-5 text-figma-red">Due Soon</div>
                        <div class="text-preset-5-bold text-figma-red">2 ($40.00)</div>
                    </div>
                </div>
            </div>
            
            <div class="mt-(--figma-spacing-300) md:mt-0 md:ml-(--figma-spacing-300) md:col-span-3 bg-white p-(--figma-spacing-300) rounded-lg max-h-max">
                 <DataTable :value="transactions" class="h-max" :globalFilterFields="['name', 'category', 'date', 'amount']">

                <Column field="billTitle">
                    <template #header><div class="text-preset-5 text-figma-grey-900">Bill Title</div></template>
                    <template #body="slotProps">
                        <div class="text-preset-4-bold text-figma-grey-900">
                            {{ slotProps.data.billTitle }}
                        </div>
                    </template>
                </Column>
                <Column field="dueDate">
                    <template #header><div class="text-preset-5 text-figma-grey-900">Due Date</div></template>
                    <template #body="slotProps">
                        <div class="text-preset-5 text-figma-green">{{ slotProps.data.dueDate }}</div>
                    </template>
                </Column>
                <Column field="amount" style="width: 60px;">
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
    </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import { ref } from 'vue';
import { DataTable, Column } from 'primevue';

const transactions = ref([
    { id: 1, billTitle: 'Elevate Education', amount: 250, dueDate: 'Monthly-1st' },
    { id: 2, billTitle: 'Bravo Zen Spa', amount: 70, dueDate: 'Monthly-3rd' },
    { id: 3, billTitle: 'Charlie Electric Company', amount: -10, dueDate: 'Monthly-5th' },
    { id: 4, billTitle: 'Delta Taxi', amount: 30, dueDate: 'Monthly-6th' },
    { id: 5, billTitle: 'Echo Game Store', amount: 5, dueDate: 'Monthly-12th' }
]);

const getFormattedAmount = (amount: any) => {
    return amount > 0 ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`;
};

</script>

<style scoped>

</style>