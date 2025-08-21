 
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { validateEmail } from "../utils/helper";
import { authStyles as styles } from "../assets/dummystyle";
import { landingPageStyles } from "../assets/dummystyle";
import { Input } from "../components/Input";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validations
    if (!validateEmail(email)) {
      setError('❌ Invalid email address');
      return;
    }

    if (password.length < 8) {
      setError('❌ Password must be at least 8 characters');
      return;
    }

    setError(''); // Clear previous error

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard'); // ✅ Go to dashboard
      }
    } catch (err) {
      setError(err.response?.data?.message || '❌ Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3 className={landingPageStyles.logoText}>Welcome Back</h3>
        <p className={styles.subtitle}>Sign in to continue building amazing resumes</p>
      </div>

      <form onSubmit={handleLogin} className={styles.form}>
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

        {/* ✅ Error message display */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>

        <p className={styles.switchText}>
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("signup")}
            className={styles.switchButton}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
