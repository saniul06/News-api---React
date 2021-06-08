import axios from 'axios'

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines/"
})

instance.defaults.headers.common = { "X-API-Key": 'b0ce54ac23904e9f9ce1c59da9debc65' };

export default instance;