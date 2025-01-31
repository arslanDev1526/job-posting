import React, { useState,useEffect } from 'react';
import {
   Link
  } from "react-router-dom";
  import { useAuth } from '../../../contexts/authprovider';
import supabase from '../../../config/client';

const Applications = () => {
  const [applicationData , setApplicationData] = useState([]);

 const {id, role, user} = useAuth();

const formatDate = (timestamp) => { 
  const timestampstr = String(timestamp);
  return timestampstr.split('T')[0];
}

  const fetchApplicationData = async () => { 
    if (user){ 
      const {data, error} = await supabase
      .from("job_data")
      .select("*")
      .eq("hr_id", id)

      if(data) { 
        console.log(data,"data in application")
        const updatedData = data.map(job => (  { 
          ...job,
          created_at: formatDate(job.created_at),
        }));
        setApplicationData(updatedData)
      }else{
        console.log(error)
      }
    }
  }

  useEffect(()=> { 
    fetchApplicationData();
  }, [])
  return (
  <>
    <div className="container mx-auto pt-40">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Position</th>
            <th className="border border-gray-300 px-4 py-2">Job Posting Date</th>
            <th className="border border-gray-300 px-4 py-2">Last Date</th>
            <th className="border border-gray-300 px-4 py-2">No. of Applicants</th>
            <th className="border border-gray-300 px-4 py-2">Detail</th>
          </tr>
        </thead>
        <tbody>
          {applicationData.map((job, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{job.post_name}</td>
              <td className="border border-gray-300 px-4 py-2">{job.created_at}</td>
              <td className="border border-gray-300 px-4 py-2">{job.last_date}</td>
              <td className="border border-gray-300 px-4 py-2">{job.applicants}</td>
              <td className="border border-gray-300 px-4 py-2"><Link to ={`/applications_detail/${job.id}`}>Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
   </>
  )
}

export default Applications