import axios from 'axios';
import qs from 'qs';
import { Toast } from 'mint-ui';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'https://m.shanhs.com';

axios.interceptors.request.use((config) => {
    if(config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(res => {
    if(!res.data.success) {
        return Promise.reject(res);
    }
    return res;
}, err => {
    return Promise.reject(err);
});

export default (url, params = {}) => {
    const { method = 'get', ...data } = params;    
    return new Promise((resolve, reject) => {
        axios({method, url, data})
          .then(res => {
              resolve(res)
          })
          .catch(err => {
              Toast('请求错误');
          })
    })
}

