const axios = require('axios');

let axiosInstance = axios.create({
  baseURL: 'http://localhost:3333/'
});

export default axiosInstance;