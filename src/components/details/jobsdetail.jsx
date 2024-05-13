import React from "react";
import { GoDotFill } from "react-icons/go";

const JobsDetail = ({ info }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">
              Summary
            </h2>
            <p className="text-base lg:text-lg">{info.summary}</p>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">
              Prerequisites
            </h2>
            <ul>
              {info.prerequisites.map((prereq, index) => (
                <div className="flex gap-3" key={index}>
                  <div className="mt-2">
                    <GoDotFill className="w-3" />
                  </div>
                  <li className="text-base lg:text-lg">{prereq}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">
              Required
            </h2>
            <ul>
              {info.required.map((require, index) => (
                <div className="flex gap-3" key={index}>
                  <div className="mt-2">
                    <GoDotFill className="w-3" />
                  </div>
                  <li className="text-base lg:text-lg">{require}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">
              Skills
            </h2>
            <ul>
              {info.skills.map((skill, index) => (
                <div className="flex gap-3" key={index}>
                  <div className="mt-2">
                    <GoDotFill className="w-3" />
                  </div>
                  <li className="text-base lg:text-lg">{skill}</li>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start">
              {" "}
              Responsibilities
            </h2>
            <ul>
              {info.responsibilities.map((responsibility, index) => (
               <div className="flex gap-3" key={index}>
               <div className="mt-2">
                 <GoDotFill className="w-3" />
               </div>
               <li className="text-base lg:text-lg">{responsibility}</li>
             </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsDetail;
