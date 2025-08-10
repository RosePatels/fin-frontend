import axios from 'axios';


export async function getPots()  {
    const result = axios.get('http://localhost:8080/api/pots');
    return result;
}