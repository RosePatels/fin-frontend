<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
    <header class="flex justify-between items-center mb-(--figma-spacing-400)">
        <PageTitle title="Budgets" />
        <Button severity=""><div class="text-preset-5">+ Add New Budget</div></Button>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-(--figma-spacing-300)">
        <div class="gap-(--figma-spacing-250) bg-white p-(--figma-spacing-400) rounded-lg max-h-max">
        <div class="w-full">
            <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full" />
            <!-- <div class="text-center mt-(--figma-spacing-300) text-preset-4 text-figma-grey-500"><span class="text-preset-3 text-figma-grey-900">$338</span> of 975 limit</div> -->
        </div>


        <div class="mt-(--figma-spacing-400)">
            <h3 class="text-preset-2 mb-(--figma-spacing-300)">Spending Summary</h3>
            <div>
                <div class="flex justify-between items-center pb-(--figma-spacing-200) border-b border-figma-grey-100">
                    <div class="flex items-center">
                        <span class="small-line inline-block bg-figma-green"></span>
                        <div class="text-preset-5 text-figma-grey-500">Entertainment</div>
                    </div>
                    <div class="flex items-center">
                        <div class="text-preset-4-bold text-figma-grey-900 pr-(--figma-spacing-50)">$15.00</div>
                        <div class="text-preset-5 text-figma-grey-500"> of $50.00</div>
                    </div>
                </div>

                <div class="flex justify-between items-center pb-(--figma-spacing-200) pt-(--figma-spacing-200) border-b border-figma-grey-100">
                    <div class="flex items-center">
                        <span class="small-line inline-block bg-figma-cyan"></span>
                        <div class="text-preset-5 text-figma-grey-500">Bills</div>
                    </div>
                    <div class="flex items-center">
                        <div class="text-preset-4-bold text-figma-grey-900 pr-(--figma-spacing-50)">$150.00</div>
                        <div class="text-preset-5 text-figma-grey-500"> of $750.00</div>
                    </div>
                </div>

                <div class="flex justify-between items-center pb-(--figma-spacing-200) pt-(--figma-spacing-200) border-b border-figma-grey-100">
                    <div class="flex items-center">
                        <span class="small-line inline-block bg-figma-yellow"></span>
                        <div class="text-preset-5 text-figma-grey-500">Dining Out</div>
                    </div>
                    <div class="flex items-center">
                        <div class="text-preset-4-bold text-figma-grey-900 pr-(--figma-spacing-50)">$133.00</div>
                        <div class="text-preset-5 text-figma-grey-500"> of $75.00</div>
                    </div>
                </div>

                <div class="flex justify-between items-center pb-(--figma-spacing-200) pt-(--figma-spacing-200) border-b border-figma-grey-100">
                    <div class="flex items-center">
                        <span class="small-line inline-block bg-figma-grey-500"></span>
                        <div class="text-preset-5 text-figma-grey-500">Personal Care</div>
                    </div>
                    <div class="flex items-center">
                        <div class="text-preset-4-bold text-figma-grey-900 pr-(--figma-spacing-50)">$40.00</div>
                        <div class="text-preset-5 text-figma-grey-500"> of $100.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="bg-white md:col-start-2 rounded-lg p-(--figma-spacing-400) max-h-max mb-(--figma-spacing-300)">
           <div class="flex items-center justify-between mb-(--figma-spacing-250)">
               <div class="flex items-center">
                   <div class="circle bg-figma-green"></div>
                   <h4 class="text-preset-2 ml-(--figma-spacing-100)">Entertainment</h4>
               </div>
               <!-- <button>...</button> -->
           </div>

           <div class="text-preset-4 text-figma-grey-500 mb-(--figma-spacing-200)">Maximum of $50.00</div>

           <ProgressBar :value="50" :showValue="false" :dt="entertainmentProgressBarDt"></ProgressBar>

           <div class="mt-(--figma-spacing-200) grid grid-cols-2">
               <div class="flex flex-row">
                   <div class="large-line bg-figma-green"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Spent</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$15</div>
                   </div>
               </div>
               <div class="flex flex-row">
                   <div class="large-line bg-figma-beige-100"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Remaining</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$35</div>
                   </div>
               </div>
           </div>

           <div class="p-(--figma-spacing-250) mt-(--figma-spacing-250) bg-figma-beige-100 rounded-lg">
               <div class="flex items-center justify-between pb-(--figma-spacing-250)">
                    <div class="text-preset-3 text-figma-grey-900">Latest Spending</div>
                   <router-link :to="{ name: 'budgets' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                       See Details
                       <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
                   </router-link>
               </div>

               <div class="flex justify-between items-center pb-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Charlie Electric Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center py-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Foxtrot Waterline</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center pt-(--figma-spacing-150)">
                   <div class="text-preset-5-bold text-figma-grey-900">Tango Gas Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>
           </div>
       </div>

       <div class="bg-white md:col-start-2 rounded-lg p-(--figma-spacing-400) max-h-max mb-(--figma-spacing-300)">
           <div class="flex items-center justify-between mb-(--figma-spacing-250)">
               <div class="flex items-center">
                   <div class="circle bg-figma-cyan"></div>
                   <h4 class="text-preset-2 ml-(--figma-spacing-100)">Bills</h4>
               </div>
               <!-- <button>...</button> -->
           </div>

           <div class="text-preset-4 text-figma-grey-500 mb-(--figma-spacing-200)">Maximum of $750.00</div>

           <ProgressBar :value="50" :showValue="false" :dt="billsProgressBarDt"></ProgressBar>

           <div class="mt-(--figma-spacing-200) grid grid-cols-2">
               <div class="flex flex-row">
                   <div class="large-line bg-figma-cyan"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Spent</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$250</div>
                   </div>
               </div>
               <div class="flex flex-row">
                   <div class="large-line bg-figma-beige-100"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Remaining</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$750</div>
                   </div>
               </div>
           </div>

           <div class="p-(--figma-spacing-250) mt-(--figma-spacing-250) bg-figma-beige-100 rounded-lg">
               <div class="flex items-center justify-between pb-(--figma-spacing-250)">
                    <div class="text-preset-3 text-figma-grey-900">Latest Spending</div>
                   <router-link :to="{ name: 'budgets' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                       See Details
                       <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
                   </router-link>
               </div>

               <div class="flex justify-between items-center pb-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Charlie Electric Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center py-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Foxtrot Waterline</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center pt-(--figma-spacing-150)">
                   <div class="text-preset-5-bold text-figma-grey-900">Tango Gas Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>
           </div>
       </div>

        <div class="bg-white md:col-start-2 rounded-lg p-(--figma-spacing-400) max-h-max mb-(--figma-spacing-300)">
           <div class="flex items-center justify-between mb-(--figma-spacing-250)">
               <div class="flex items-center">
                   <div class="circle bg-figma-yellow"></div>
                   <h4 class="text-preset-2 ml-(--figma-spacing-100)">Dining Out</h4>
               </div>
               <!-- <button>...</button> -->
           </div>

           <div class="text-preset-4 text-figma-grey-500 mb-(--figma-spacing-200)">Maximum of $75.00</div>

           <ProgressBar :value="50" :showValue="false" :dt="diningOutProgressBarDt"></ProgressBar>

           <div class="mt-(--figma-spacing-200) grid grid-cols-2">
               <div class="flex flex-row">
                   <div class="large-line bg-figma-yellow"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Spent</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$133.75</div>
                   </div>
               </div>
               <div class="flex flex-row">
                   <div class="large-line bg-figma-beige-100"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Remaining</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$0</div>
                   </div>
               </div>
           </div>

           <div class="p-(--figma-spacing-250) mt-(--figma-spacing-250) bg-figma-beige-100 rounded-lg">
               <div class="flex items-center justify-between pb-(--figma-spacing-250)">
                    <div class="text-preset-3 text-figma-grey-900">Latest Spending</div>
                   <router-link :to="{ name: 'budgets' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                       See Details
                       <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
                   </router-link>
               </div>

               <div class="flex justify-between items-center pb-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Charlie Electric Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center py-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Foxtrot Waterline</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center pt-(--figma-spacing-150)">
                   <div class="text-preset-5-bold text-figma-grey-900">Tango Gas Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>
           </div>
       </div>

        <div class="bg-white md:col-start-2 rounded-lg p-(--figma-spacing-400) max-h-max mb-(--figma-spacing-300)">
           <div class="flex items-center justify-between mb-(--figma-spacing-250)">
               <div class="flex items-center">
                   <div class="circle bg-figma-navy"></div>
                   <h4 class="text-preset-2 ml-(--figma-spacing-100)">Personal Care</h4>
               </div>
               <!-- <button>...</button> -->
           </div>

           <div class="text-preset-4 text-figma-grey-500 mb-(--figma-spacing-200)">Maximum of $100.00</div>

           <ProgressBar :value="50" :showValue="false" :dt="personalCareProgressBarDt"></ProgressBar>

           <div class="mt-(--figma-spacing-200) grid grid-cols-2">
               <div class="flex flex-row">
                   <div class="large-line bg-figma-navy"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Spent</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$40</div>
                   </div>
               </div>
               <div class="flex flex-row">
                   <div class="large-line bg-figma-beige-100"></div>
                   <div class="flex flex-col">
                       <div class="text-preset-5 text-figma-grey-500">Remaining</div>
                       <div class="text-preset-4-bold text-figma-grey-900">$60</div>
                   </div>
               </div>
           </div>

           <div class="p-(--figma-spacing-250) mt-(--figma-spacing-250) bg-figma-beige-100 rounded-lg">
               <div class="flex items-center justify-between pb-(--figma-spacing-250)">
                    <div class="text-preset-3 text-figma-grey-900">Latest Spending</div>
                   <router-link :to="{ name: 'budgets' }" class="text-preset-4 text-figma-grey-500 flex items-center hover:text-figma-grey-900 cursor-pointer see-details">
                       See Details
                       <svg class="ml-(--figma-spacing-200)" xmlns="http://www.w3.org/2000/svg" width="6" height="11" fill="none"><path fill="#696868" d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146z"/></svg>
                   </router-link>
               </div>

               <div class="flex justify-between items-center pb-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Charlie Electric Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center py-(--figma-spacing-150) border-b border-figma-grey-500/15">
                   <div class="text-preset-5-bold text-figma-grey-900">Foxtrot Waterline</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>

                <div class="flex justify-between items-center pt-(--figma-spacing-150)">
                   <div class="text-preset-5-bold text-figma-grey-900">Tango Gas Company</div>
                   <div class="text-right">
                       <div class="text-preset-5-bold text-figma-grey-900">-$100.00</div>
                       <div class="text-preset-5 text-figma-grey-500">1 Aug 2024</div>
                   </div>
               </div>
           </div>
       </div>
    </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import MobileFooter from '../Navigation/MobileFooter.vue';
import { Button, ProgressBar } from 'primevue';
import Chart from 'primevue/chart';

const chartData = ref();
const chartOptions = ref<any>(null);

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

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

const entertainmentProgressBarDt = ref({
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-green)',
        }
});

const billsProgressBarDt = ref({
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-cyan)',
        }
});

const diningOutProgressBarDt = ref({
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-yellow)',
        }
});

const personalCareProgressBarDt = ref({
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-navy)',
        }
});
</script>


<style scoped>
.small-line {
     height: 20px;
        width: 4px;
        border-radius: 100px;
        margin-right: 16px;
}

.large-line {
     height: 40px;
        width: 4px;
        border-radius: 100px;
        margin-right: 16px;
}

.circle {
    height: 16px;
    width: 16px;
    border-radius: 50%;
}
</style>