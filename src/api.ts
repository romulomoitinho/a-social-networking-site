import axios from 'axios';

export const api = axios.create({
    //baseURL: 'https://socialcompass.000webhostapp.com/api',
    //baseURL: 'https://socialcompass.pagekite.me/api',
    baseURL: 'https://backup-socialcompass.pagekite.me/api',
    //baseURL: 'https://backup.socialcompass.pagekite.me/api',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: '*/*',
      Connection: 'keep-alive',
      'Accept-Encoding': 'gzip, deflate, br',
      'Bypass-Tunnel-Reminder': '*',
    },
})