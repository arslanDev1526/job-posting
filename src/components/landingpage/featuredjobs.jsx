import React, { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext";
import { useNavigate } from "react-router-dom";
import Loader from "../loader";

const FeaturedJobs = () => {
  const [loadingNavigation, setLoadingNavigation] = useState(false);
  const { cardsData, isLoading } = useContext(DataContext);
  const featuredJobs = cardsData.slice(0, 6);
  const navigate = useNavigate();

  const handleNavigate =  () => {
    setLoadingNavigation(true);
 
      navigate("/jobs");
  
    setLoadingNavigation(false);
  };

  return (
    <div className="py-10 bg-green-50">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 xl:px-10">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold text-green-900">Featured Jobs</h1>
            <p className="text-green-900 text-lg font-medium md:w-96 lg:w-full">
              Know your worth and find the job that qualify your life
            </p>
          </div>
          <div className="mt-5 md:mt-0">
            <button
              className={`bg-green-200  text-green-900 hover:bg-green-900 hover:text-white px-5 py-2.5 rounded-md text-md font-semibold`}
              onClick={handleNavigate}
              disabled={loadingNavigation}
            >
              View All Jobs
            </button>
            {/* {loadingNavigation ? <Loader/> : null} */}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between md_2:flex-row md_2:flex-wrap lg_2:flex-row lg_2:flex-wrap mb-4 gap-5">
          {featuredJobs.map((item, job) => (
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
                <div className="flex justify-between w-full">
                  <span
                    className={`${
                      item.featured ? "visible" : "invisible"
                    } bg-pink-100 text-pink-900 px-2 py-1 rounded-sm text-sm`}
                  >
                    {item.featured}
                  </span>

                  <span
                    className={`${
                      item.timing ? "visible" : "invisible"
                    } bg-green-100 px-2 py-1 rounded-sm text-sm text-green-900`}
                  >
                    {item.timing}
                  </span>
                </div>
                <div className="w-14 flex flex-col items-center">
                  <img src={item.img_url} alt="logo" />
                  <span className="mt-2 font-medium text-lg text-green-900">
                    {item.company_name}
                  </span>
                </div>
                <h2
                  className={`text-xl text-green-900 font-bold  text-center`}
                  //  md_2:overflow-ellipsis md_2:whitespace-nowrap md_2:overflow-hidden
                >
                  {item.post_name}
                </h2>

                {/* <p className="text-gray-600 text-xs">{item.positions}</p> */}

                <p className="text-green-900 text-base text-center">
                  {item.department}
                </p>

                <button className="bg-green-900 text-white hover:opacity-75 px-5 py-2.5 rounded-md text-sm font-medium">
                  Apply For Job
                </button>
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
    </div>
  );
};

export default FeaturedJobs;
