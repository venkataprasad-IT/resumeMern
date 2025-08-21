// import axios from 'axios'
// import { BASE_URL } from './apiPaths'
// import { Beaker, TableConfig } from 'lucide-react'

// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     timeout: 10000,
//     headers:{
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     }
// })

// //REQUEST INTERCEPTER
// axiosInstance.interceptors.request.use (
//     (config) =>{
//         const accessToken = localStorage.getItem('token')
//         if(accessToken){
//             config.headers.Authorization = `Bearer ${accessToken}`
//         }
//         return config;
//     },

//     (error) => {
//         return  Promise.reject(error)
//     }
//  )

//  //RESPONSE INTERCEPTER

//  axiosInstance.interceptors.response.use(
//     (response) =>{
//         return response;
//     },
//     (error) =>{
//         if(error.response) {
//             if(error.response.status === 401) {
//                 window.location.href= '/'
//             }
//             else if(error.response.status === 500){
//                 console.log("Server Error")
                
//             }
//         }

//         else if(error.code === 'ECONNABORTED'){
//             console.error("Reques timeout")
//         }
//         return Promise.reject(error)
//     }
//  )

//  export default axiosInstance;



import axios from 'axios';

// Update BASE_URL if it's incorrect
export const BASE_URL = 'http://localhost:8000/api';

const axiosInstance = axios.create({
  // baseURL: BASE_URL, // Removed baseURL to avoid double baseURL issue
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
});

// ✅ REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = '/';
      } else if (error.response.status === 500) {
        console.log("Server Error");
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error("Request timeout");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
