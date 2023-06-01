import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Feature = ({ feature }) => {
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fullTime_or_partTime, salary } = feature;
    return (
        <div className='border p-7 rounded-md'>
            <img className='w-32 h-14' src={company_logo} alt="" />
            <h1 className='text-2xl font-bold mt-5'>{job_title}</h1>
            <h2 className='text-lg mb-5'>{company_name}</h2>
            <button className='border border-indigo-500 text-indigo-500 px-5 py-1 font-semibold mr-5'>{remote_or_onsite}</button>
            <button className='border border-indigo-500 text-indigo-500 px-5 py-1 font-semibold'>{fullTime_or_partTime}</button>
            <div className='flex mt-5 mb-8'>
                <p className='mr-10 flex items-center'> <span><MapPinIcon className="h-6 w-6 text-gray-400" />
                </span>
                    {location}
                </p>
                <p className='flex items-center'>
                    <span><CurrencyDollarIcon className="h-6 w-6 text-gray-400" /></span>
                    Salary: {salary}</p>

            </div>
            <Link to={`/job/${id}`}>
                <button className='bg-gradient-to-r from-indigo-500 to-blue-400 py-1 px-5 text-white rounded text-lg'>View Details</button>
            </Link>

        </div>
    );
};

export default Feature;