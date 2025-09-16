import axios from 'axios';


export async function getPots()  {
    const result = axios.get('../api/pots/list');
    return result;
}

export async function createPot(pot: any) {
    const result = axios.post('../api/pots/create', pot);
    return result;
}