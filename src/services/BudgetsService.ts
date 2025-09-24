import axios from 'axios';

export async function listBudgets()  {
    const result = axios.get('../api/budgets/list');
    return result;
}

export async function createBudget(budget: any) {
    const result = axios.post('../api/budgets/create', budget);
    return result;
}