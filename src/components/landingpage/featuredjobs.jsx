import React, { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext";

const FeaturedJobs = () => {
  const { cardsData, isLoading } = useContext(DataContext);
  const featuredJobs = cardsData.slice(0, 6);

  return (
    <div className="px-6 py-16 bg-green-50">
      <div className="flex flex-col justify-between mb-8 md:flex-row md:px-2 lg:px-7">
        <div>
          <h1 className="text-3xl font-bold">Featured Jobs</h1>
          <p className="mt-2 text-lg font-medium md:w-96 lg:w-full">
          Know your worth and find the job that qualify your life
          </p>
        </div>
        <div> 
        <button className="bg-green-700 text-white mt-8 md:mt-0 px-8 py-3 rounded-md font-medium">
          View All Jobs
        </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center md_2:flex-row md_2:flex-wrap lg_2:flex-row lg_2:flex-wrap mb-4 gap-5">
        {featuredJobs.map((item,job) => (
          <div
            key={job.id}
            onClick={() => handleCardClick(job.id, job.department)}
            className="w-full max-w-[34rem] md_2:w-[48%] xl:w-[31%] transform transition duration-500 hover:scale-105"
          >
            {isLoading && (
              <div className="">
                <Loader />
              </div>
            )}
            <div className="bg-white relative shadow-md p-5 rounded-md h-full flex flex-col items-center cursor-pointer gap-4">
              <h2
                className={` text-sm font-semibold text-blue-600 text-center
          md_2:overflow-ellipsis md_2:whitespace-nowrap md_2:overflow-hidden md_2:w-40`}
              >
                {item.post_name}
              </h2>

              <p className="text-gray-600 text-xs">{item.positions}</p>

              <div className="w-full">
                <p className="text-gray-600 text-xs text-center">
                  {item.department}
                </p>

                <button className="block mx-auto mt-4 bg-green-700 font-medium text-white px-4 py-2 rounded-md">
                  Apply Now
                </button>
              </div>
            </div>
              {/* <div key={index} className="card1">
            <h3 className="h3">{job.title}</h3>
            <p className="p">{job.description}</p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
