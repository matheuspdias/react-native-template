import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mppro.com.br/api/pig'
});

export default {
    ping: async (req, res) => {
        let { data: json } = await api.get('/ping');
        return json;
    }
}