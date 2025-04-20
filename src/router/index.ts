import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '@/views/Overview/OverviewPage.vue'
import TransactionsPage from '@/views/Transactions/TransactionsPage.vue'
import BudgetsPage from '@/views/Budgets/BudgetsPage.vue'
import PotsPage from '@/views/Pots/PotsPage.vue'
import RecurringBillsPage from '@/views/Recurring Bills/RecurringBillsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OverviewPage,
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewPage
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsPage
    },
    {
      path: '/budgets',
      name: 'budgets',
      component: BudgetsPage
    },
    {
      path: '/pots',
      name: 'pots',
      component: PotsPage
    },
    {
      path: '/recurring-bills',
      name: 'recurring-bills',
      component: RecurringBillsPage
    }
  ],
})

export default router
