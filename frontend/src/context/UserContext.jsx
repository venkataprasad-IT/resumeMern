// import React, { createContext, useEffect, useState } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPaths";

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user) return;

//     const accessToken = localStorage.getItem("token");
//     if (!accessToken) {
//       setLoading(false);
//       return;
//     }

//     const fetchUser = async () => {
//       try {
//         const response = await axiosInstance.get(API_PATHS.AUTH.GET_PATH);
//         setUser(response.data);
//       } catch (error) {
//         console.error("User not authenticated", error);
//         clearUser();
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const updateUser = (userData) => {
//     setUser(userData);
//     localStorage.setItem("token", userData.token);
//   };

//   const clearUser = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;




import React, { createContext, useEffect, useState, useContext } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) return;

    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PATH, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("User not authenticated", error);
        clearUser();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Custom hook to access user context easily in any component
export const useUserContext = () => useContext(UserContext);

export default UserProvider;
