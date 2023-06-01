import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobsCard = ({ appliedJob }) => {
    const { id, company_logo, company_name, job_title, location, salary, educational_requirements, contact_information, job_description, experiences, job_responsibility, remote_or_onsite, fullTime_or_partTime } = appliedJob;
    return (
        <div className='md:flex items-center justify-between max-w-5xl mx-auto border mb-10 p-5'>
            {/* ddd */}
            <div className='md:flex items-center'>
                <div className='mr-10 p-5'>
                    <img className='w-52 h-52' src={company_logo} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>{job_title}</h1>
                    <h1 className='text-xl font-semibold my-2'>{company_name}</h1>
                    <div className='flex my-3'>
                        <p className='border border-indigo-500 text-indigo-500 px-5 py-1 font-semibold mr-5 m'>{remote_or_onsite}</p>
                        <p className='border border-indigo-500 text-indigo-500 px-5 py-1 font-semibold mr-5'>{fullTime_or_partTime}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center text-lg'>
                            <MapPinIcon className="h-6 w-6 text-gray-400" />
                            <h1>{location}</h1>
                        </div>
                        <div className='flex ml-5 text-lg items-center'>
                            <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
                            <h1>salary: {salary}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/job/${id}`}>
                    <button className='bg-gradient-to-r from-indigo-500 to-blue-400 py-1 px-5 text-white rounded text-lg'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJobsCard;