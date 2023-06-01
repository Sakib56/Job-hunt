import React from 'react';
import bannerImg from "../../assets/All Images/P3OLGJ1 copy 1.png"

const Banner = () => {
    return (
       <div className='max-w-7xl mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='p-3'>
                <h1 className='text-5xl md:text-7xl font-bold'>One Step</h1>
                <h1 className='text-5xl md:text-7xl font-bold my-2'>Closer To Your</h1>
                <h1 className='text-5xl md:text-7xl font-bold text-indigo-500'>Dream Job</h1>
                <p className='mt-5'>Explore thousands of job opportunities with all the information <br /> you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='mt-5 bg-gradient-to-r from-indigo-500 to-blue-400 py-2 px-5 text-white rounded text-lg'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bannerImg} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Banner;