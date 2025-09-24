import axios from 'axios';

export async function listTransactions()  {
    const result = axios.get('../api/transactions/list');
    return result;
}

export async function createTransaction(transaction: any) {
    const result = axios.post('../api/transactions/create', transaction);
    return result;
}