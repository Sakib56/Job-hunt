import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, CalendarIcon, CalculatorIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Utilities/FakeDb';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    let jobDetailsArray = [];
    const data = useParams();
    const detailsId = data.id;
    // console.log(detailsId)
    const jobViewDetails = useLoaderData()
    // console.log(jobViewDetails)
    if (jobViewDetails) {
        const details = jobViewDetails.find(job => job.id === detailsId)
        jobDetailsArray.push(details)
    }
    // console.log(jobDetailsArray[0]);
    const { id, job_title, location, salary, educational_requirements, contact_information, job_description, experiences, job_responsibility
    } = jobDetailsArray[0];

    let idArray = []
    const handleApplyNow = (id) => {
        idArray.push(id)
        const findData = idArray.filter(id => id === id)
        console.log(findData.length)
        if (findData.length == 1) {
            addToDb(id)
            toast.success(' Job applied success !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error(' Already added Applied this Job !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
       
        
    }
    return (
        <div className=''>
            <div className='bg-teal-50 py-20'>
                <h1 className='text-4xl text-center font-bold'>Job Details</h1>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-16 text-xl p-5'>
                <div className='col-span-2'>
                    <p className='text-lg my-5'><span className='font-bold text-xl'>Job Description:</span> {job_description}</p>
                    <p className='text-lg'><span className='font-bold text-xl'>Job Responsibility:</span> {job_responsibility}</p>
                    <p className='text-xl mt-5 font-bold'>Educational Requirements:</p>
                    <p className='text-lg'>{educational_requirements}</p>
                    <p className='text-xl font-bold mt-5'>Experiences:</p>
                    <p className='text-lg'>{experiences}</p>

                </div>
                <div className='bg-teal-50 p-10 rounded-lg'>
                    <h1 className='font-bold my-5'>Job Details </h1>
                    <hr />
                    <h1 className='flex my-3'> <span><CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
                    </span><span className='font-semibold mr-2'>Salary : </span> {salary}
                    </h1>
                    <h1 className='flex'><span><CalendarIcon className="h-6 w-6 text-gray-400" />
                    </span><span className='font-semibold mr-2'>Job Title : </span> {job_title}
                    </h1>
                    <h1 className='font-bold my-5'>Contact Information</h1>
                    <hr />
                    <p className='flex my-3'> <span><PhoneIcon className="h-6 w-6 text-gray-400" />
                    </span><span className='font-semibold mr-2'>Phone : </span> {contact_information.phone}
                    </p>
                    <p className='flex my-3'> <span><EnvelopeIcon className="h-6 w-6 text-gray-400" />
                    </span><span className='font-semibold mr-2'>Email : </span>{contact_information.email}
                    </p>
                    <p className='flex'><span><MapPinIcon className="h-6 w-6 text-gray-400" />
                    </span><span className='font-semibold mr-2'>Address : </span>  {location}
                    </p>
                    <div onClick={() => handleApplyNow(id)} className='mt-10'>
                        <button className='bg-gradient-to-r from-indigo-500 to-blue-400 py-3 w-full text-white rounded text-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;