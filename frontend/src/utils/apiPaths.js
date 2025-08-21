// 

// import { Upload } from "lucide-react";

// export const BASE_URL = 'http://localhost:8000';

// // ROUTES USED FOR THE FRONTEND
// export const API_PATHS = {
//   AUTH: {
//     REGISTER: '/api/auth/register',         // ✅ used in signup.jsx
//     LOGIN: '/api/auth/login',               // ✅ used in login.jsx
//     GET_PATH: '/api/auth/profile',          // ✅ used to fetch user after login
//   },

//   RESUME: {
//     CREATE: '/api/auth/register',          
//     GET_ALL: '/ai/resume',                
//     GET_BY_ID: (id) => `/api/resume/${id}`, // ✅ used to get single resume
//     UPDATE: (id) => `/api/resume/${id}`,    // ✅ used to update resume
//     DELETE: (id) => `/api/resume/${id}`,    // ✅ used to delete resume
//     UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`, // ✅ uploading to a specific resume
//   },

//   image: {
//     UPLOAD_IMAGES: '/api/auth/upload-image' // ✅ used in image upload
//   }
// };


// src/utils/apiPaths.js

// import { Upload } from "lucide-react";

// export const BASE_URL = 'http://localhost:8000';

// export const API_PATHS = {
//   AUTH: {
//     REGISTER: '/api/auth/register',
//     LOGIN: '/api/auth/login',
//     GET_PATH: '/api/auth/profile',
//   },

//   RESUME: {
//     CREATE: '/api/resume/create',      // fixed
//     GET_ALL: '/api/resume',           // fixed
//     GET_BY_ID: (id) => `/api/resume/${id}`,
//     UPDATE: (id) => `/api/resume/${id}`,
//     DELETE: (id) => `/api/resume/${id}`,
//     UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
//   },

//   image: {
//     UPLOAD_IMAGES: '/api/auth/upload-image',
//   }
// };



export const BASE_URL = 'http://localhost:8000';

export const API_PATHS = {
  AUTH: {
    REGISTER: `${BASE_URL}/api/auth/register`,
    LOGIN: `${BASE_URL}/api/auth/login`,
    GET_PATH: `${BASE_URL}/api/auth/profile`,
  },

  RESUME: {
    CREATE: `${BASE_URL}/api/resume/create`,
    GET_ALL: `${BASE_URL}/api/resume`,
    GET_BY_ID: (id) => `${BASE_URL}/api/resume/${id}`,
    UPDATE: (id) => `${BASE_URL}/api/resume/${id}`,
    DELETE: (id) => `${BASE_URL}/api/resume/${id}`,
    UPLOAD_IMAGES: (id) => `${BASE_URL}/api/resume/${id}/upload-images`,
  },

  IMAGE: {
    UPLOAD_IMAGES: `${BASE_URL}/api/auth/upload-image`,
  }
};

