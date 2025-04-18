import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserImage from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
import button from 'daisyui/components/button';

const Navbar = () => {
     
      const {user, SingOut} =useContext(AuthContext);



    const links = <>

        
        <li className='text-[#706F6F] font-bold '> <NavLink to="/"> Home </NavLink> </li>
        <li className='text-[#706F6F] font-bold  '> <NavLink to="/about"> About </NavLink> </li>
        <li className='text-[#706F6F]  font-bold '> <NavLink to="/career"> Career </NavLink> </li>
        

    </>

    return (
        <div className='w-11/12 mx-auto justify-center mt-10'>
            <div className="navbar ">
                <div className="navbar-start">

                    <h1>{user && user.email}</h1>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <span> <img src={UserImage} alt="" /></span>

                    {
                        user && user?.email? ( <button onClick={SingOut} className='btn btn-neutral px-10 text-2xl ml-5'> LogOut</button>   )
                        :
                        (<NavLink to="/auth/login" > <button className='btn btn-neutral px-10 text-2xl ml-5'>Login</button></NavLink>)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;