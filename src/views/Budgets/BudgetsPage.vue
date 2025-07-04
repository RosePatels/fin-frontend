<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
    <header class="flex justify-between items-center mb-(--figma-spacing-400)">
        <PageTitle title="Budgets" />
        <Button severity=""><div class="text-preset-5">+ Add New Budget</div></Button>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-(--figma-spacing-300)">
        <div class="gap-(--figma-spacing-250) bg-white p-(--figma-spacing-400) rounded-lg">
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
            <div>
                <div>Circle</div>
                <h4>Bills</h4>
                <button>...</button>
            </div>

            <div>Maximum of $750.00</div>

            <div>Progress Bar</div>

            <div>
                <div>
                    <div>Line</div>
                    <div>
                        <div>Spent</div>
                        <div>$250</div>
                    </div>
                </div>
                <div>
                    <div>Line</div>
                    <div>
                        <div>Free</div>
                        <div>$750</div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h5>Latest Spending</h5>
                    <div>See All</div>
                </div>

                <div>
                    <div>Charlie Electric Company</div>
                    <div>
                        <div>-$100.00</div>
                        <div>1 Aug 2024</div>
                    </div>
                </div>

                <div>
                    <div>Foxtrot Waterline</div>
                    <div>
                        <div>-$100.00</div>
                        <div>1 Aug 2024</div>
                    </div>
                </div>

                <div>
                    <div>Tango Gas Company</div>
                    <div>
                        <div>-$50.00</div>
                        <div>1 Aug 2024</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div>
                <div>Circle</div>
                <h4>Dining Out</h4>
                <button>...</button>
            </div>

            <div>Maximum of $75.00</div>

            <div>Progress Bar</div>

            <div>
                <div>
                    <div>Line</div>
                    <div>
                        <div>Spent</div>
                        <div>$67</div>
                    </div>
                </div>
                <div>
                    <div>Line</div>
                    <div>
                        <div>Free</div>
                        <div>$8</div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h5>Latest Spending</h5>
                    <div>See All</div>
                </div>

                <div>
                    <div>Lima Dining House</div>
                    <div>
                        <div>-$30.00</div>
                        <div>21 Aug 2024</div>
                    </div>
                </div>

                <div>
                    <div>Yuna Kim</div>
                    <div>
                        <div>-$21.50</div>
                        <div>20 Aug 2024</div>
                    </div>
                </div>

                <div>
                    <div>Juliet Restaurant</div>
                    <div>
                        <div>-$15.50</div>
                        <div>12 Aug 2024</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div>
                <div>Circle</div>
                <h4>Personal Care</h4>
                <button>...</button>
            </div>

            <div>Maximum of $100.00</div>

            <div>Progress Bar</div>

            <div>
                <div>
                    <div>Line</div>
                    <div>
                        <div>Spent</div>
                        <div>$250</div>
                    </div>
                </div>
                <div>
                    <div>Line</div>
                    <div>
                        <div>Free</div>
                        <div>$750</div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h5>Latest Spending</h5>
                    <div>See All</div>
                </div>

                <div>
                    <div>Charlie Electric Company</div>
                    <div>
                        <div>-$100.00</div>
                        <div>1 Aug 2024</div>
                    </div>
                </div>

                <div>
                    <div>Foxtrot Waterline</div>
                    <div>
                        <div>-$100.00</div>
                        <div>1 Aug 2024</div>
                    </div>
                </div>

                <div>
                    <div>Tango Gas Company</div>
                    <div>
                        <div>-$50.00</div>
                        <div>1 Aug 2024</div>
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
import { Button } from 'primevue';
import Chart from 'primevue/chart';

const chartData = ref();
const chartOptions = ref(null);

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

const handleResize = (chart) => {
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
.small-line {
     height: 20px;
        width: 4px;
        border-radius: 100px;
        margin-right: 16px;
}
</style>