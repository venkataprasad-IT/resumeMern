// import React, { useState, useContext } from "react";
// import { authStyles as styles } from "../assets/dummystyle";
// import { UserContext } from "../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import { validateEmail } from "../utils/helper";
// import axiosInstance from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPaths";
// import { Input } from "./Input";

// const SignUp = ({ setCurrentPage }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const { updateUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     if (!fullName) {
//       setError('Please enter the full Name Broh..');
//       return;
//     }
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }
//     if (!password) {
//       setError('Please enter password');
//       return;
//     }

//     setError('');

//     try {
//       const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
//         name: fullName,
//         email,
//         password,
//       });

//       const { token } = response.data;
//       if (token) {
//         localStorage.setItem('token', token);
//         updateUser(response.data);
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || 'Something went wrong. Please try again');
//     }
//   };

//   return (
//     <div className={styles.signupContainer}>
//       <div className={styles.headerWrapper}>
//         <h3 className={styles.signupTitle}>Create Account</h3>
//         <p className={styles.signupSubtitle}>Join thousands of professional today</p>
//       </div>
//       {/* FORM */}
//       <form onSubmit={handleSignUp} className={styles.signupForm}>
//         <Input value={fullName} onChange={({target}) => setFullName(target.value)}
//             label='Full Name'
//             placeholder='John Doe'
//             type='text' />

//          <Input value={email} onChange={({target}) => setEmail(target.value)}
//             label='Email'
//             placeholder='email.example.com'
//             type='email' />

//          <Input value={password} onChange={({target}) => setPassword(target.value)}
//             label='Password'
//             placeholder='Min 8 Characters'
//             type='password' />
//             {error && <div className={styles.errorMessage}>{error}</div>}
//             <button type='submit' className={styles.signupSubmit}> 
//                 Create Account
//             </button>


//             {/**Footer Section */}
//             <p className={styles.switchText}>
//                     Already have an account? {' '}
//                     <button onClick={() => setCurrentPage('login')}
//                         type= 'button' className={styles.signupSwitchButton}>
//                             Sign In
//                     </button>
//             </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState, useContext } from "react";
import { authStyles as styles } from "../assets/dummystyle";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { Input } from "./Input";

const SignUp = ({ setCurrentPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setError("⚠️ Please enter your full name");
      return;
    }
    if (!validateEmail(email)) {
      setError("⚠️ Please enter a valid email");
      return;
    }
    if (password.length < 8) {
      setError("⚠️ Password must be at least 8 characters");
      return;
    }

    setError(""); // Clear any previous error

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      } else {
        setError("⚠️ Sign up failed. No token received.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "⚠️ Something went wrong during sign up");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.signupTitle}>Create Account</h3>
        <p className={styles.signupSubtitle}>Join thousands of professionals today</p>
      </div>

      <form onSubmit={handleSignUp} className={styles.signupForm}>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="email@example.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />

        {/* ✅ Error Message */}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <button type="submit" className={styles.signupSubmit}>
          Create Account
        </button>

        <p className={styles.switchText}>
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("login")}
            className={styles.signupSwitchButton}
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
    