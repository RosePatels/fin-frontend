import axios from 'axios';


export async function getPots()  {
    const result = axios.get('../api/pots');
    return result;
}