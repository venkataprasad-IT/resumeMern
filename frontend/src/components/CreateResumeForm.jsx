// import React, { useState } from 'react';
// import { Input } from './Input.jsx';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';

// const CreateResumeForm = () => {
//     const [title, setTitle] = useState("");
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleCreateResume = async (e) => {
//         e.preventDefault();

//         if (!title) {
//             setError("Please enter resume title");
//             return;
//         }
//         set("")

//         try{
//             const respone = await axiosInstance.post(API_PATHS.RESUME.CREATE, {
//                 title,
//             })
//             if(respone.data?._id){
//                 navigate(`/resume/${respone.data?._id}`)
//             }
//         }
//         catch(error){
//             if(error.respone && error.respone.data.message){
//                 setError(error.respone.data.message)
//             }else{
//                 setError('Something went wrong. Please try again.')
//             }
//         }

        
//     };

//     return (
//         <div className='w-full max-w-md p-8 bg-white rounded-2xl border border-gray-100 shadow-lg'>
//             <h3 className='text-2xl font-bold text-gray-900 mb-2'>Create New Resume</h3>
//             <p className='text-gray-600 mb-8'>
//                 Give your resume a title to get started. You can customize everything later.
//             </p>
            
//             <form onSubmit={handleCreateResume}>
//     <Input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         label='Resume Title'
//         placeholder='e.g., John Doe - Software Engineer'
//         type='text'
//     />

//     {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

//     <button
//         type='submit'
//         className='w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all'
//     >
//         Create Resume
//     </button>
// </form>
//         </div>
//     );
// };

// export default CreateResumeForm;




// import React, { useState } from 'react';
// import { Input } from './Input.jsx';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';

// const CreateResumeForm = () => {
//   const [title, setTitle] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleCreateResume = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       setError('Please enter resume title');
//       return;
//     }
//     setError(null);
//     try {
//       const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, { title });
//       if (response.data?._id) {
//         setSuccess(true);
//         setTimeout(() => {
//           navigate(`/resume/${response.data._id}`);
//         }, 800);
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
//       setError(msg);
//     }
//   };

//   return (
//     <div
//       className={`w-full max-w-md p-8 rounded-2xl border shadow-lg transition-all duration-500 ${
//         success
//           ? 'bg-green-100 border-green-400 shadow-green-200 scale-105'
//           : 'bg-white border-gray-100'
//       }`}
//     >
//       <h3 className="text-2xl font-bold text-gray-900 mb-2">Create New Resume</h3>
//       <p className="text-gray-600 mb-8">Give your resume a title to get started. You can customize everything later.</p>
//       <form onSubmit={handleCreateResume}>
//         <Input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           label="Resume Title"
//           placeholder="e.g., John Doe - Software Engineer"
//           type="text"
//         />
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all"
//         >
//           Create Resume
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateResumeForm;



// import React, { useState } from 'react';
// import { Input } from './Input.jsx';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';

// const CreateResumeForm = () => {
//   const [title, setTitle] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleCreateResume = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       setError('Please enter resume title');
//       return;
//     }
//     setError(null);
//     try {
//       const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, { title });
//       if (response.data?._id) {
//         setSuccess(true);
//         setTimeout(() => {
//           navigate(`/resume/${response.data._id}`); // ✅ this works now
//         }, 800);
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
//       setError(msg);
//     }
//   };

//   return (
//     <div
//       className={`w-full max-w-md p-8 rounded-2xl border shadow-lg transition-all duration-500 ${
//         success
//           ? 'bg-green-100 border-green-400 shadow-green-200 scale-105'
//           : 'bg-white border-gray-100'
//       }`}
//     >
//       <h3 className="text-2xl font-bold text-gray-900 mb-2">Create New Resume</h3>
//       <p className="text-gray-600 mb-8">Give your resume a title to get started. You can customize everything later.</p>
//       <form onSubmit={handleCreateResume}>
//         <Input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           label="Resume Title"
//           placeholder="e.g., John Doe - Software Engineer"
//           type="text"
//         />
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all"
//         >
//           Create Resume
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateResumeForm;

import React, { useState } from 'react';
import { Input } from './Input.jsx';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { useUserContext } from '../context/UserContext';

const CreateResumeForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { user } = useUserContext(); // 🔐 fetch token

  const handleCreateResume = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter resume title');
      return;
    }
    setError(null);
    try {
      const response = await axiosInstance.post(
        API_PATHS.RESUME.CREATE,
        { title },
        {
          headers: {
            Authorization: `Bearer ${user.token}`, // ✅ Ensure token is sent
          },
        }
      );
      if (response.data?._id) {
        setSuccess(true);
        setTimeout(() => {
          // ✅ Updated to correct route
          navigate(`/edit-resume/${response.data._id}`);
        }, 800);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      setError(msg);
    }
  };

  return (
    <div
      className={`w-full max-w-md p-8 rounded-2xl border shadow-lg transition-all duration-500 ${
        success
          ? 'bg-green-100 border-green-400 shadow-green-200 scale-105'
          : 'bg-white border-gray-100'
      }`}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Create New Resume</h3>
      <p className="text-gray-600 mb-8">
        Give your resume a title to get started. You can customize everything later.
      </p>
      <form onSubmit={handleCreateResume}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Resume Title"
          placeholder="e.g., John Doe - Software Engineer"
          type="text"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all"
        >
          Create Resume
        </button>
      </form>
    </div>
  );
};

export default CreateResumeForm;
