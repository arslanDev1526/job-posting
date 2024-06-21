import React, { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext";

const FeaturedJobs = () => {
  const { cardsData, isLoading } = useContext(DataContext);
  const featuredJobs = cardsData.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Featured Jobs</h1>
          <p className="mt-2 text-gray-600">
            Discover exciting job opportunities.
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600">
          View All Jobs
        </button>
      </div>
      <div className="flex flex-col md_2:flex-row md_2:flex-wrap lg_2:flex-row lg_2:flex-wrap mt-4 mb-4 gap-5">
        {featuredJobs.map((item,job) => (
          <div
            key={job.id}
            onClick={() => handleCardClick(job.id, job.department)}
            className="w-full max-w-[34rem] md_2:w-[48%] xl:w-[31%] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
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

                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-green-600">
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
