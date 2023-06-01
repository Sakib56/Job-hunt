import React, { useEffect, useState } from 'react';

const JobsCategory = () => {
    const [jobCategory, setJobCategory] = useState([]);
    useEffect(() => {
        fetch('/JobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])
    // console.log(jobCategory)
    return (
        <div className='mt-32 p-3'>
            <h1 className='text-center text-5xl font-bold'>Job Category List</h1>
            <p className='text-center text-lg mt-5 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    jobCategory.map(category =>
                        <div className='bg-teal-50 p-8 rounded' key={category.id}>
                            <img className='bg-teal-50 h-16 w-16 rounded-lg' src={category.logo} alt="" />
                            <h1 className='text-xl font-bold mt-7 mb-3'>{category.name}</h1>
                            <p>{category.jobsAvailable} JobsAvailable</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default JobsCategory;