<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
     <header class="flex justify-between items-center mb-(--figma-spacing-400)">
            <PageTitle title="Transactions" />
            <Button severity=""><div class="text-preset-5" @click="showAddTransactionDialog">+ Add Transaction</div></Button>
    </header>
    <div class="bg-white p-(--figma-spacing-400) rounded-lg">
        <DataTable :value="transactions" class="h-max" :globalFilterFields="['name', 'category', 'date', 'amount']">

            <Column field="transactionName">
                <template #header><div class="text-preset-5 text-figma-grey-900">Recipient / Sender</div></template>
                <template #body="slotProps">
                    <div class="text-preset-4-bold text-figma-grey-900">
                        {{ slotProps.data.transactionName }}
                    </div>
                </template>
            </Column>
            <Column field="categoryType">
                <template #header><div class="text-preset-5 text-figma-grey-900">Category</div></template>
                <template #body="slotProps">
                    <div class="text-preset-5 text-figma-grey-500">{{ slotProps.data.categoryType }} - {{ getCategoryname(slotProps.data.categoryType, slotProps.data.categoryId) }}</div>
                </template>
            </Column>
            <Column field="transactionDate">
                <template #header><div class="text-preset-5 text-figma-grey-900">Transaction Date</div></template>
                <template #body="slotProps">
                    <div class="text-preset-5 text-figma-grey-500">
                        {{ slotProps.data.transactionDate }}
                    </div>
                </template>
            </Column>  
            <Column field="transactionAmount" style="width: 75px;">
                <template #header><div class="text-preset-5 text-figma-grey-900">Amount</div></template>
                <template #body="slotProps">
                    <div class="text-preset-4-bold text-right" :class="{ 'text-figma-green': slotProps.data.transactionAmount > 0, 'text-figma-red': slotProps.data.transactionAmount < 0 }">
                        {{ getFormattedAmount(slotProps.data.transactionAmount) }}
                    </div>
                </template>
            </Column>
        </DataTable>

    </div>
    <Dialog v-model:visible="addTransactionDialogVisible" modal header="Add Transaction" :style="{ width: '550px' }">
        <span class="text-figma-grey-500 text-preset-4 block mb-8">Add a transaction to help monitor spending across budgets, pots, income, and recurring bills.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-55">Transaction Name:</label>
            <InputText v-model="transactionData.transactionName" class="flex-auto" autocomplete="off"  fluid />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-55">Transaction amount:</label>
            <InputNumber v-model="transactionData.transactionAmount" mode="currency" currency="USD" local="en-US" fluid autocomplete="off" />
        </div>
         <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-55">Transaction Date: </label>
            <DatePicker v-model="transactionData.transactionDate" class="w-full" dateFormat="mm/dd/yy" showIcon />
        </div>
         <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-55">Category Type: </label>
            <Select v-model="transactionData.categoryType" :options="categoryTypes" class="w-full" placeholder="Select a category type" @change="populateCategoryNames" />
        </div>
         <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-55">Category: </label>
            <Select v-model="transactionData.categoryId" :options="categoryNames" optionLabel="label" optionValue="value" class="w-full" placeholder="Select a category type" />
        </div>

        <div class="flex justify-end gap-2">
            <Button type="button" label="Save" @click="addTransaction"></Button>
            <Button type="button" label="Cancel" severity="secondary" @click="hideAddTransactionDialog"></Button>
        </div>
    </Dialog>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { DataTable, Column, Button, Dialog, InputNumber, InputText, DatePicker, Select } from 'primevue';
import PageTitle from '@/components/PageTitle.vue';
import { listTransactions, createTransaction } from '@/services/TransactionsService';
import { listBudgets } from '@/services/BudgetsService';
import { getPots } from '@/services/PotsService';
import type { isFinite } from 'chart.js/helpers';

const transactions = ref<any>([]);
const budgets = ref<any>([]);
const pots = ref<any>([]);

const categoryTypes = ['Budgets', 'Pots', 'Income'];
const categoryNames = ref([]);

const getFormattedAmount = (amount: any) => {
    return amount > 0 ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`;
};

const populateCategoryNames = () => {
    if (transactionData.value.categoryType === 'Budgets') {
        categoryNames.value = budgets.value.map((budget: any) => ({
            label: budget.budgetName,
            value: budget.id
        }));
    } else if (transactionData.value.categoryType === 'Pots') {
        categoryNames.value = pots.value.map((pot: any) => ({
            label: pot.potName,
            value: pot.id
        }));
    } else {
        categoryNames.value = ['Income'];
    }
    transactionData.value.categoryId = null; // Reset selected category
};

const getCategoryname = (categoryType: any, categoryId: any) => {
    if (categoryType === 'Budgets') {
        const budget = budgets.value.find((b: any) => b.id === categoryId);
        return budget ? budget.budgetName : 'Unknown Budget';
    } else if (categoryType === 'Pots') {
        const pot = pots.value.find((p: any) => p.id === categoryId);
        return pot ? pot.potName : 'Unknown Pot';
    } else if (categoryType === 'Income') {
        return 'Income';
    }
    return 'Unknown Category';
};

onMounted(async () => {
    const response = await listTransactions();
    const budgetsResponse = await listBudgets();
    const potsResponse = await getPots();
    transactions.value = response.data;
    budgets.value = budgetsResponse.data;
    pots.value = potsResponse.data;
});

const addTransactionDialogVisible = ref(false);

const transactionData = ref<any>({
    transactionName: '',
    categoryType: null,
    categoryId: null,
    transactionDate: '',
    transactionAmount: 0
});

const showAddTransactionDialog = () => {
    addTransactionDialogVisible.value = true;
};

const hideAddTransactionDialog = () => {
    addTransactionDialogVisible.value = false;
    transactionData.value = {
        transactionName: '',
        categoryType: '',
        categoryId: null,
        transactionDate: '',
        transactionAmount: 0
    };
};

const addTransaction = async () => {
    try {
        const newTransaction = { ...transactionData.value };
        const response = await createTransaction(newTransaction);
        transactions.value.push(response.data);
        hideAddTransactionDialog();
    } catch (error) {
        console.error('Error creating transaction:', error);
    }
};
</script>


<style scoped>

</style>