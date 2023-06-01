import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto pt-8'>
            <div className="navbar bg-teal-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                            <li><ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        </ul>
                    </div>
                    <h1 className='text-2xl md:text-4xl font-bold'>Job Hunt</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                        <li><ActiveLink to='/appliedjobs'>Applied Jobs</ActiveLink></li>
                        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='bg-gradient-to-r from-indigo-500 to-blue-400 py-2 px-5 text-white rounded text-lg'>Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;