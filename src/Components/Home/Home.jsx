import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobsCategory from '../JobsCategory/JobsCategory';
import { useLoaderData } from 'react-router-dom';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {
    return (

        <div>
            <div className='bg-teal-50'>
                <Banner />
            </div>
            <div className='max-w-7xl mx-auto'>
                <JobsCategory />
                <JobFeature />
            </div>
        </div>

    );
};

export default Home;