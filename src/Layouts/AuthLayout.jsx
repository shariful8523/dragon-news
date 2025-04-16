import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;