<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
   <header class="flex justify-between items-center mb-(--figma-spacing-400)">
        <PageTitle title="Pots" />
        <Button severity=""><div class="text-preset-5">+ Add New Pot</div></Button>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-(--figma-spacing-300)">

        <div  v-for="pot in pots" :key="pot.id" class="bg-white p-(--figma-spacing-300) rounded-xl max-h-max">
                <div class="flex items-center justify-between mb-(--figma-spacing-400)">
                    <div class="flex items-center">
                        <div class="circle bg-figma-green"></div>
                        <h4 class="text-preset-2 text-figma-grey-900 ml-(--figma-spacing-200)">{{ pot.potName }}</h4>
                    </div>
                </div>
    
                <div class="flex items-center justify-between mb-(--figma-spacing-200)">
                    <div class="text-preset-4 text-figma-grey-500">Total Saved</div>
                    <div class="text-preset-1 text-figma-grey-900">${{ pot.totalSaved }}</div>
                </div>
    
                <ProgressBar :value="Math.round((pot.totalSaved / pot.targetAmount) * 100)" :showValue="false" :dt="savingsProgressBarDt"></ProgressBar>

    
                <div class="flex items-center justify-between mt-(--figma-spacing-150) mb-(--figma-spacing-400)">
                    <div class="text-preset-5-bold text-figma-grey-900">{{ Math.round((pot.totalSaved / pot.targetAmount) * 100) }}%</div>
                    <div class="text-preset-5 text-figma-grey-500">Target of ${{ pot.targetAmount }}</div>
                </div>
                
                <div class="grid grid-cols-2 gap-(--figma-spacing-200)">
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">+ Add Money</div></Button>
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">Withdraw</div></Button>
                </div>
        </div>
        <!-- <div class="bg-white p-(--figma-spacing-300) rounded-xl max-h-max">
                <div class="flex items-center justify-between mb-(--figma-spacing-400)">
                    <div class="flex items-center">
                        <div class="circle bg-figma-green"></div>
                        <h4 class="text-preset-2 text-figma-grey-900 ml-(--figma-spacing-200)">Savings</h4>
                    </div>
                </div>
    
                <div class="flex items-center justify-between mb-(--figma-spacing-200)">
                    <div class="text-preset-4 text-figma-grey-500">Total Saved</div>
                    <div class="text-preset-1 text-figma-grey-900">$159.00</div>
                </div>
    
                <ProgressBar :value="50" :showValue="false" :dt="savingsProgressBarDt"></ProgressBar>

    
                <div class="flex items-center justify-between mt-(--figma-spacing-150) mb-(--figma-spacing-400)">
                    <div class="text-preset-5-bold text-figma-grey-900">7.95%</div>
                    <div class="text-preset-5 text-figma-grey-500">Target of $2,000</div>
                </div>
                
                <div class="grid grid-cols-2 gap-(--figma-spacing-200)">
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">+ Add Money</div></Button>
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">Withdraw</div></Button>
                </div>
        </div>

          <div class="bg-white p-(--figma-spacing-300) rounded-xl max-h-max">
                <div class="flex items-center justify-between mb-(--figma-spacing-400)">
                    <div class="flex items-center">
                        <div class="circle bg-figma-navy"></div>
                        <h4 class="text-preset-2 text-figma-grey-900 ml-(--figma-spacing-200)">Concert Ticket</h4>
                    </div>
                </div>
    
                <div class="flex items-center justify-between mb-(--figma-spacing-200)">
                    <div class="text-preset-4 text-figma-grey-500">Total Saved</div>
                    <div class="text-preset-1 text-figma-grey-900">$110.00</div>
                </div>
    
                <ProgressBar :value="50" :showValue="false" :dt="concertTicketProgressBarDt"></ProgressBar>

    
                <div class="flex items-center justify-between mt-(--figma-spacing-150) mb-(--figma-spacing-400)">
                    <div class="text-preset-5-bold text-figma-grey-900">73.3%</div>
                    <div class="text-preset-5 text-figma-grey-500">Target of $150</div>
                </div>
                
                <div class="grid grid-cols-2 gap-(--figma-spacing-200)">
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">+ Add Money</div></Button>
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">Withdraw</div></Button>
                </div>
        </div>

          <div class="bg-white p-(--figma-spacing-300) rounded-xl max-h-max">
                <div class="flex items-center justify-between mb-(--figma-spacing-400)">
                    <div class="flex items-center">
                        <div class="circle bg-figma-cyan"></div>
                        <h4 class="text-preset-2 text-figma-grey-900 ml-(--figma-spacing-200)">Gift</h4>
                    </div>
                </div>
    
                <div class="flex items-center justify-between mb-(--figma-spacing-200)">
                    <div class="text-preset-4 text-figma-grey-500">Total Saved</div>
                    <div class="text-preset-1 text-figma-grey-900">$40.00</div>
                </div>
    
                <ProgressBar :value="50" :showValue="false" :dt="giftProgressBarDt"></ProgressBar>

    
                <div class="flex items-center justify-between mt-(--figma-spacing-150) mb-(--figma-spacing-400)">
                    <div class="text-preset-5-bold text-figma-grey-900">66.6%</div>
                    <div class="text-preset-5 text-figma-grey-500">Target of $60</div>
                </div>
                
                <div class="grid grid-cols-2 gap-(--figma-spacing-200)">
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">+ Add Money</div></Button>
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">Withdraw</div></Button>
                </div>
        </div>

          <div class="bg-white p-(--figma-spacing-300) rounded-xl max-h-max">
                <div class="flex items-center justify-between mb-(--figma-spacing-400)">
                    <div class="flex items-center">
                        <div class="circle bg-figma-yellow"></div>
                        <h4 class="text-preset-2 text-figma-grey-900 ml-(--figma-spacing-200)">New Laptop</h4>
                    </div>
                </div>
    
                <div class="flex items-center justify-between mb-(--figma-spacing-200)">
                    <div class="text-preset-4 text-figma-grey-500">Total Saved</div>
                    <div class="text-preset-1 text-figma-grey-900">$10.00</div>
                </div>
    
                <ProgressBar :value="50" :showValue="false" :dt="newLaptopProgressBarDt"></ProgressBar>

    
                <div class="flex items-center justify-between mt-(--figma-spacing-150) mb-(--figma-spacing-400)">
                    <div class="text-preset-5-bold text-figma-grey-900">1%</div>
                    <div class="text-preset-5 text-figma-grey-500">Target of $1,000</div>
                </div>
                
                <div class="grid grid-cols-2 gap-(--figma-spacing-200)">
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">+ Add Money</div></Button>
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">Withdraw</div></Button>
                </div>
        </div>

          <div class="bg-white p-(--figma-spacing-300) rounded-xl max-h-max">
                <div class="flex items-center justify-between mb-(--figma-spacing-400)">
                    <div class="flex items-center">
                        <div class="circle bg-figma-dark-purple"></div>
                        <h4 class="text-preset-2 text-figma-grey-900 ml-(--figma-spacing-200)">Holiday</h4>
                    </div>
                </div>
    
                <div class="flex items-center justify-between mb-(--figma-spacing-200)">
                    <div class="text-preset-4 text-figma-grey-500">Total Saved</div>
                    <div class="text-preset-1 text-figma-grey-900">$531.00</div>
                </div>
    
                <ProgressBar :value="50" :showValue="false" :dt="holidayProgressBarDt"></ProgressBar>

    
                <div class="flex items-center justify-between mt-(--figma-spacing-150) mb-(--figma-spacing-400)">
                    <div class="text-preset-5-bold text-figma-grey-900">36.8%</div>
                    <div class="text-preset-5 text-figma-grey-500">Target of $1440</div>
                </div>
                
                <div class="grid grid-cols-2 gap-(--figma-spacing-200)">
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">+ Add Money</div></Button>
                    <Button severity="secondary"><div class="text-preset-4-bold text-figma-grey-900">Withdraw</div></Button>
                </div>
        </div> -->
    </div>
</div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import { Button, ProgressBar } from 'primevue';
import { getPots } from '@/services/PotsService';

const savingsProgressBarDt = ref({
        height: '8px',
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-green)',
        }
});

const concertTicketProgressBarDt = ref({
        height: '8px',
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-navy)',
        }
});

const giftProgressBarDt = ref({
        height: '8px',
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-cyan)',
        }
});

const newLaptopProgressBarDt = ref({
        height: '8px',
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-yellow)',
        }
});

const holidayProgressBarDt = ref({
        height: '8px',
        background: 'var(--color-figma-beige-100)',
        value: {
            background: 'var(--color-figma-dark-purple)',
        }
});

const pots = ref([]);

onMounted(async () => {
    try {
        const response = await getPots();
        pots.value = response.data;
    } catch (error) {
        console.error('Error fetching pots:', error);
    }
});
</script>
<style scoped>
.circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
}
</style>