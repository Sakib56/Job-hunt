import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import axios from 'axios';



const JobFeature = () => {
  const [jobFeature, setJobFeature] = useState([])

  useEffect(() => {
    fetch('JobFeature.json')
      .then(res => res.json())
      .then(data => setJobFeature(data.slice(0, 4)))
  }, [])
  // console.log(jobFeature)

  const seeAllJobs = () => {
    axios.get('JobFeature.json')
      .then(response => {
       setJobFeature(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className='mt-28'>
      <h1 className='text-center text-5xl font-bold'>Featured Jobs</h1>
      <p className='text-center text-lg mt-5 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          jobFeature.map(feature => <Feature
            key={feature.id}
            feature={feature}
          >

          </Feature>)
        }
      </div>
      <div onClick={() => seeAllJobs()} className={`text-center my-10 ${jobFeature.length === 6 ? 'hidden' : ''}`}>
        <button className='font-bold mt-5 bg-gradient-to-r from-indigo-500 to-blue-400 py-3 px-5 text-white rounded text-lg'>See All Jobs</button>
      </div>
    </div>
  );
};

export default JobFeature;