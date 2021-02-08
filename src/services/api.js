import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mppro.com.br/api'
});

export default {
    ping: async () => {
        let { data: json } = await api.get('/ping');
        return json;
    }
}