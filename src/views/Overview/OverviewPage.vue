<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
    <PageTitle title="Overview" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-(--figma-spacing-150) sm:gap-(--figma-spacing-300) py-(--figma-spacing-400)">
        <div class="p-(--figma-spacing-300) bg-figma-grey-900 text-white rounded-xl"> 
            <div class="text-preset-4">Current Balance</div>
            <div class="pt-(--figma-spacing-150) text-preset-1">$4,836.00</div>
        </div>
        <div class="p-(--figma-spacing-300) bg-white rounded-xl">
            <div class="text-preset-4 text-figma-grey-500">Income</div>
            <div class="pt-(--figma-spacing-150) text-preset-1 text-figma-grey-900">$3,814.25</div>
        </div>
        <div class="p-(--figma-spacing-300) bg-white rounded-xl">
            <div class="text-preset-4 text-figma-grey-500">Expenses</div>
            <div class="pt-(--figma-spacing-150) text-preset-1 text-figma-grey-900">$1,700.50</div>
        </div>
    </div>
<div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-(--figma-spacing-300)">
    <div class="grid grid-cols-1 md:grid-cols-2 md:row-span-1 h-max gap-(--figma-spacing-250) bg-white p-(--figma-spacing-400) rounded-lg">
        <div class="md:col-span-2 max-h-max flex justify-between items-center">
            <div class="text-preset-2 text-figma-grey-900">Pots</div>
            <router-link :to="{ name: 'pots' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                See Details
                <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
            </router-link>
        </div>
        <div class="flex items-center col-span-1 bg-figma-beige-100 rounded-xl p-(--figma-spacing-200)">  
            <svg class="mr-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="28" height="36" fill="none"><path fill="#277C78" d="M22.438 5.888V3A2.188 2.188 0 0 0 20.25.812H7.75A2.188 2.188 0 0 0 5.562 3v2.888a5.945 5.945 0 0 0-5 5.862v17.5A5.937 5.937 0 0 0 6.5 35.188h15a5.937 5.937 0 0 0 5.938-5.938v-17.5a5.945 5.945 0 0 0-5-5.862ZM20.563 3v2.813h-3.125V2.688h2.812a.313.313 0 0 1 .313.312Zm-8.125 2.813V2.688h3.124v3.124h-3.124ZM7.75 2.688h2.813v3.124H7.437V3a.312.312 0 0 1 .313-.313ZM25.563 29.25a4.064 4.064 0 0 1-4.063 4.063h-15a4.064 4.064 0 0 1-4.063-4.063v-17.5A4.063 4.063 0 0 1 6.5 7.687h15a4.062 4.062 0 0 1 4.063 4.063v17.5ZM18.688 23a3.438 3.438 0 0 1-3.438 3.438h-.313V28a.938.938 0 0 1-1.874 0v-1.563H11.5a.938.938 0 0 1 0-1.875h3.75a1.563 1.563 0 0 0 0-3.125h-2.5a3.438 3.438 0 0 1 0-6.875h.313V13a.938.938 0 0 1 1.874 0v1.563H16.5a.938.938 0 0 1 0 1.874h-3.75a1.563 1.563 0 0 0 0 3.125h2.5A3.438 3.438 0 0 1 18.688 23Z"/></svg>
            <div>
                <div class="text-preset-4 text-figma-grey-500 pb-(--figma-spacing-200)">Total Saved</div>
                <div class="text-preset-1 text-figma-grey-900">$850</div>
            </div>
        </div>
        <div class="grid col-span-1 grid-cols-2 gap-(--figma-spacing-200)">
            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-green"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Savings</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$159</div>
                </div>
            </div>
            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-cyan"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Gift</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$40</div>
                </div>
            </div>
            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-navy"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Concert Ticket</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$110</div>
                </div>
            </div>
            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-yellow"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">New Laptop</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$10</div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 md:row-span-2 gap-(--figma-spacing-250) bg-white p-(--figma-spacing-400) rounded-lg">
        <div class="md:col-span-2 max-h-max flex justify-between items-center">
            <div class="text-preset-2 text-figma-grey-900">Budgets</div>
            <router-link :to="{ name: 'budgets' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                See Details
                <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
            </router-link>
        </div>

        <div class="w-full">
            <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full" />
            <!-- <div class="text-center mt-(--figma-spacing-300) text-preset-4 text-figma-grey-500"><span class="text-preset-3 text-figma-grey-900">$338</span> of 975 limit</div> -->
        </div>


        <div class="grid grid-cols-1 gap-(--figma-spacing-200)">
            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-green"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Entertainment</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$50.00</div>
                </div>
            </div>

            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-cyan"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Bills</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$750.00</div>
                </div>
            </div>

            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-yellow"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Dining Out</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$75.00</div>
                </div>
            </div>

            <div class="grid grid-cols-[max-content_1fr] items-center">
                 <span class="line inline-block bg-figma-navy"></span>
                <div>
                    <div class="text-preset-5 text-figma-grey-500">Personal Care</div>
                    <div class="text-preset-4-bold text-figma-grey-900">$100.00</div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:row-span-7 h-max gap-(--figma-spacing-250) bg-white p-(--figma-spacing-400) rounded-lg">
        <div class="max-h-max flex justify-between items-center">
            <div class="text-preset-2 text-figma-grey-900">Transactions</div>
             <router-link :to="{ name: 'transactions' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer view-all">
                View All
                <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
             </router-link>
        </div>
        <DataTable :value="transactions" class="h-max">
            <Column field="name">
                <template #body="slotProps">
                    <div class="text-preset-4-bold text-figma-grey-900">
                        {{ slotProps.data.name }}
                    </div>
                </template>
            </Column>
            <Column field="amount">
                <template #body="slotProps">
                    <div class="flex flex-col text-right">
                        <div class="text-preset-4-bold pb-(--figma-spacing-100)" :class="{ 'text-figma-green': slotProps.data.amount > 0, 'text-figma-red': slotProps.data.amount < 0  }">{{ getFormattedAmount(slotProps.data.amount) }}</div>
                        <div class="text-preset-5 text-figma-grey-500">{{ slotProps.data.date }}</div>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
    <div class="grid grid-cols-1 md:row-span-2 h-max gap-(--figma-spacing-250) bg-white p-(--figma-spacing-400) rounded-lg">
        <div class="max-h-max flex justify-between items-center pb-(--figma-spacing-150)">
            <div class="text-preset-2 text-figma-grey-900">Recurring Bills</div>
             <router-link :to="{ name: 'recurring-bills' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                See Details
                <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
             </router-link>
        </div>

        <div class="flex justify-between items-center p-(--figma-spacing-200) bg-figma-beige-100 rounded-lg border-l-figma-green border-l-4">
            <div class="text-preset-4 text-figma-grey-500">Paid Bills</div>
            <div class="text-preset-4-bold text-figma-grey-900">$190.00</div>
        </div>

        <div class="flex justify-between items-center p-(--figma-spacing-200) bg-figma-beige-100 rounded-lg border-l-figma-yellow border-l-4">
            <div class="text-preset-4 text-figma-grey-500">Total Upcoming</div>
            <div class="text-preset-4-bold text-figma-grey-900">$194.98</div>
        </div>

        <div class="flex justify-between items-center p-(--figma-spacing-200) bg-figma-beige-100 rounded-lg border-l-figma-cyan border-l-4">
            <div class="text-preset-4 text-figma-grey-500">Paid Bills</div>
            <div class="text-preset-4-bold text-figma-grey-900">$59.98</div>
        </div>
    </div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import { DataTable, Column } from 'primevue';
import Chart from 'primevue/chart';


const transactions = ref([
    { id: 1, name: 'Emma Richardson', amount: 75, date: '19 Aug 2024' },
    { id: 2, name: 'Savory Bites Bistro', amount: -55, date: '19 Aug 2024' },
    { id: 3, name: 'Daniel Carter', amount: 42.30, date: '18 Aug 2024' },
    { id: 4, name: 'Sun Park', amount: 120, date: '17 Aug 2024' },
    { id: 5, name: 'Urban Services Hub', amount: -65, date: '17 Aug 2024' }
]);

const getFormattedAmount = (amount: any) => {
    return amount > 0 ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`;
};

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref<any>(null);

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['Entertainment', 'Bills', 'Dining Out', 'Personal Care'],
        datasets: [
            {
                data: [50, 750, 75, 100],
                backgroundColor: [documentStyle.getPropertyValue('--color-figma-green'), documentStyle.getPropertyValue('--color-figma-cyan'), documentStyle.getPropertyValue('--color-figma-yellow'), documentStyle.getPropertyValue('--color-figma-navy')],
            }
        ]
    };
};

const handleResize = (chart: any) => {
chart.resize();
}

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    };
};

</script>


<style scoped>
.line {
     height: 45px;
        width: 5px;
        border-radius: 100px;
        margin-right: 16px;
}

.see-details:hover path,
.view-all:hover path {
    fill: var(--color-figma-grey-900);
}

</style>