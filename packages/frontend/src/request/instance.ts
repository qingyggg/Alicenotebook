import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 3000
});

// Add a request interceptor
instance.interceptors.request.use(function (config:any) {
  // Do something before request is sent
  return config;
}, function (error:any) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response:any) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error:any) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  alert('网络发生异常')
  return Promise.reject(error);
});
export default instance;