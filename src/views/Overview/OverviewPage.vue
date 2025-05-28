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

    <div>
        <div>
            <div>Pots</div>
            <div>See Details</div>
        </div>
        <div>  
            <div>Icon</div>
            <div>
                <div>Total Saved</div>
                <div>$850</div>
            </div>
        </div>
        <div>
            <div>
                <div>Line</div>
                <div>
                    <div>Savings</div>
                    <div>$159</div>
                </div>
            </div>
            <div>
                <div>Line</div>
                <div>
                    <div>Gift</div>
                    <div>$40</div>
                </div>
            </div>
            <div>
                <div>Line</div>
                <div>
                    <div>Concert Ticket</div>
                    <div>$110</div>
                </div>
            </div>
            <div>
                <div>Line</div>
                <div>
                    <div>New Laptop</div>
                    <div>$10</div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div>
            <div>Transactions</div>
            <div>View All</div>
        </div>
        <div>
            <div>Portrait</div>
            <div>Emma Richardson</div>

            <div>
                <div>+$75.50</div>
                <div>19 Aug 2024</div>
            </div>
        </div>
        <div>
            <div>Portrait</div>
            <div>Savory Bites Bistro</div>

            <div>
                <div>-$55.50</div>
                <div>19 Aug 2024</div>
            </div>
        </div>
        <div>
            <div>Portrait</div>
            <div>Daniel Carter</div>

            <div>
                <div>-$42.30</div>
                <div>18 Aug 2024</div>
            </div>
        </div>

        <div>
            <div>Portrait</div>
            <div>Sun Park</div>

            <div>
                <div>+$120.00</div>
                <div>17 Aug 2024</div>
            </div>
        </div>

        <div>
            <div>Portrait</div>
            <div>Urban Services Hub</div>

            <div>
                <div>-$65.00</div>
                <div>17 Aug 2024</div>
            </div>
        </div>
    </div>


    <div>
        <div>
            <div>Budgets</div>
            <div>See Details</div>
        </div>

        <div>Budget Graph Here</div>

        <div>
            <div>
                <div>Line</div>
                <div>
                    <div>Entertainment</div>
                    <div>$50.00</div>
                </div>
            </div>

            <div>
                <div>Line</div>
                <div>
                    <div>Bills</div>
                    <div>$750.00</div>
                </div>
            </div>

            <div>
                <div>Line</div>
                <div>
                    <div>Dining Out</div>
                    <div>$75.00</div>
                </div>
            </div>

            <div>
                <div>Line</div>
                <div>
                    <div>Personal Care</div>
                    <div>$100.00</div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div>
            <div>Recurring Bills</div>
            <div>See Details</div>
        </div>

        <div>
            <div>Paid Bills</div>
            <div>$190.00</div>
        </div>

        <div>
            <div>Total Upcoming</div>
            <div>$194.98</div>
        </div>

        <div>
            <div>Due Soon</div>
            <div>$59.98</div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
</script>


<style scoped>


</style>