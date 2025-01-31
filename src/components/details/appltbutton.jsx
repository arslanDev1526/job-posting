import React from "react";
import ShareButton from "./sharebutton";
import { Link } from "react-router-dom";

const ApplyButton = ({ item, id }) => {

  return (
    <>
      <div className="sm:p-10 py-5 flex flex-col items-center md_2:items-start md_2:px-0">
        <div className="flex flex-col items-center md_2:items-start">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700">
            {item.post_name}
          </h1>
          <div className="flex flex-wrap gap-1 justify-center text-xs mt-3 md_2:justify-start">
            <p className="lg:text-sm">{item.department}</p>
            <span>-</span>
            <p className="text-gray-400 text-center lg:text-sm">
              {item.address}
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <Link to={`/job_apply/${id}`} className="bg-green-200 text-green-900 hover:bg-green-900 hover:text-white px-5 py-2.5 rounded-md text-md font-semibold">
            Apply Now
          </Link>
          {/* <button className="bg-green-500 px-4 py-2 rounded ml-5">
              {" "}
              REFER CANDIDATE{" "}
            </button> */}
          <ShareButton />
        </div>
      </div>
    </>
  );
};

export default ApplyButton;
