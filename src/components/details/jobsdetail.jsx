import React from "react";

const JobsDetail = ({ info }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">Summary</h2>
            <p className="text-base lg:text-lg">{info.summary}</p>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">Prerequisites</h2>
            <div>
              {info.prerequisites.map((prereq, index) => (
                <li className="mb-1 text-base lg:text-lg" key={index}>
                  {" "}
                  {prereq}{" "}
                </li>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">Required</h2>
            <div>
              {info.required.map((require, index) => (
                <li className="mb-1 text-base lg:text-lg" key={index}>
                  {require}
                </li>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">Skills</h2>
            <div>
              {info.skills.map((skill, index) => (
                <li className="mb-1 text-base lg:text-lg" key={index}>
                  {skill}
                </li>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start"> Responsibilities</h2>
            <div>
              {info.responsibilities.map((responsibility, index) => (
                <li className="mb-1 text-base lg:text-lg" key={index}>
                  {responsibility}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsDetail;
