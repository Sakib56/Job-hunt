import React, { useState } from 'react';
import { getShoppingCart } from '../../Utilities/FakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from './AppliedJobsCard';

const AppliedJobs = () => {
    const jobFeatures = useLoaderData()
    const [appliedJobsArray, setAppliedJobsArray] = useState(jobFeatures)

    const handleRemoteJobs = () => {
        const data = jobFeatures.filter(appliedJob => appliedJob.remote_or_onsite === 'Remote')
        setAppliedJobsArray(data)
    }
    const handleOnsiteJobs = () => {
        const data = jobFeatures.filter(appliedJob => appliedJob.remote_or_onsite === 'Onsite')
        setAppliedJobsArray(data)
    }

    return (
        <div>
            <div className='bg-teal-50 py-24'>
                <h1 className='text-5xl font-bold text-center'>Applied Jobs</h1>
            </div>
            <div className='mb-24 mt-20 max-w-7xl mx-auto'>
                <div className='text-right mb-10 max-w-6xl'>
                    <div className="dropdown text-lg">
                        <label tabIndex={0} className="bg-gray-300 m-1 px-5 py-2 rounded">Filter By</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-full">
                            <li onClick={() => handleRemoteJobs()}><a>Remote</a></li>
                            <li onClick={() => handleOnsiteJobs()}><a>Onsite</a></li>
                        </ul>
                    </div>
                </div>
                {
                    appliedJobsArray.map(appliedJob => <AppliedJobsCard
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    >

                    </AppliedJobsCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;