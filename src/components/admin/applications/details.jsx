import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../../config/client';

const Details = () => {
  const [applicationsData, setApplicationsData] = useState([]);
  const { id } = useParams();

  const fetchApplicants = async () => {
    const { data, error } = await supabase
      .from('applications_data')  // Make sure this matches your table name
      .select('*')
      .eq('job_id', id);

    if (error) {
      console.error('Error fetching applicants:', error.message);
    } else {
      console.log(data, 'data in details');
      setApplicationsData(data);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [id]);

  return (
    <div className="container mx-auto pt-40">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Full Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Experience</th>
            <th className="border border-gray-300 px-4 py-2">Resume</th>
          </tr>
        </thead>
        <tbody>
          {applicationsData.map((applicant) => (
            <tr key={applicant.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{applicant.fullName}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.email}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.address}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.city}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.professionalExperience}</td>
              <td className="border border-gray-300 px-4 py-2">{applicant.source}</td>
              <td className="border border-gray-300 px-4 py-2"><a href={applicant.cv_url} target="_blank" rel="noopener noreferrer">Download CV</a></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
