<template>
<div class="bg-figma-beige-100 px-(--figma-spacing-200) py-(--figma-spacing-300) sm:px-(--figma-spacing-400) sm:py-(--figma-spacing-500)">
    <header>
        <PageTitle title="Budgets" />
        <button>Add new budget</button>
    </header>

    <div>
        <div>Put graph chart</div>

        <div>
            <h3>Spending Summary</h3>
            <div>
                <div>line</div>
                <div>Bills</div>
                <div><span>$250.00</span> of $750.00</div>
            </div>

            <div>
                <div>line</div>
                <div>Dining Out</div>
                <div><span>$67.00</span> of $75.00</div>
            </div>

            <div>
                <div>line</div>
                <div>Personal Care</div>
                <div><span>$65.00</span> of $100.00</div>
            </div>

            <div>
                <div>line</div>
                <div>Entertainment</div>
                <div><span>$25.00</span> of $50.00</div>
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
import PageTitle from '@/components/PageTitle.vue';
import MobileFooter from '../Navigation/MobileFooter.vue';

</script>


<style scoped>

</style>