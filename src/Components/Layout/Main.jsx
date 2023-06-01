import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <div className='bg-teal-50 pb-5'>
                <Header />
            </div>
            <ToastContainer/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;