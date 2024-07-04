import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

const SolarSystem = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [loadingNavigation, setLoadingNavigation] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const elements = [
      "development",
      "design",
      "hr",
      "marketing",
      "sales",
      "IT",
      "PM",
      "SM",
      "PA",
      "finance",
    ];
    elements.forEach((className) => {
      const element = ref.current.querySelector(`.${className}`);
      if (element) {
        if (isIntersecting) {
          element.classList.add(`${className}-slide-in`);
        } else {
          element.classList.remove(`${className}-slide-in`);
        }
      }
    });
  }, [isIntersecting]);

  const handleNavigate = () => {
    setLoadingNavigation(true);
    navigate("/jobs");
    setLoadingNavigation(false);
  };

  return (
    <>
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10 bg-green-50"
      >
        <div className="py-20"> 

        <div className="flex flex-col justify-between md:flex-row">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold text-green-900">
              Available Jobs
            </h1>
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
          </div>
        </div>

        <div className="flex justify-center mt-10 ">
          <div className="border border-dotted border-green-700 h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] rounded-full flex justify-center">
            <div className="border border-dotted border-green-700 h-[17rem] w-[17rem] md:h-[25rem] md:w-[25rem] rounded-full mx-auto my-auto flex justify-center">
              <div className="border border-dotted border-green-700 h-[14rem] w-[14rem] md:h-[20rem] md:w-[20rem] rounded-full mx-auto my-auto flex justify-center">
                <div className="border border-dotted border-green-700 h-[11rem] w-[11rem] md:h-[15rem] md:w-[15rem] rounded-full mx-auto my-auto flex justify-center">
                  <div className="border border-dotted border-green-700 h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] rounded-full mx-auto my-auto flex justify-center">
                    <div className="main border border-dotted border-green-700 h-[5rem] w-[5rem] md:h-[5rem] md:w-[5rem] bg-white rounded-full flex justify-center items-center my-auto mx-auto relative">
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold pixelpluse">
                        Pulses
                      </span>
                      <span className="absolute text-green-800 ttext-sm font-medium md:text-lg md:font-semibold development">
                        Development
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold design">
                        Design
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold hr">
                        HR
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold marketing">
                        Marketing
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold finance">
                        Finance
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold sales">
                        Sales
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold PM">
                        Management
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold IT">
                        Technology
                      </span>
                      <span className="absolute text-green-800 text-sm font-medium md:text-lg md:font-semibold PA">
                        {" "}
                        Analysis
                      </span>
                      <span className="absolute SM text-green-800 text-sm font-medium md:text-lg md:font-semibold">
                        Operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SolarSystem;
