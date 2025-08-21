// import React, {Children, useContext} from 'react'
// import { UserContext } from '../context/UserContext'
// import Navbar from './Navbar'


// const DashboardLayout = ({activeMenu, children}) =>{
//     const {user} = useContext(useContext);

//     return(
//         <div>
//             <Navbar activeMenu={activeMenu}/>
//             {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
//         </div>
//     )
// }
 


import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Navbar from './Navbar';

const DashboardLayout = ({ activeMenu, children }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeMenu={activeMenu} />
      {user && (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          {children}
        </main>
      )}
    </div>
  );
};

export default DashboardLayout;
