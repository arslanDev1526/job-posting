import React from "react";
import ShareButton from "./sharebutton";
import { useNavigate } from "react-router-dom";

const ApplyButton = ({ item }) => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate("/job_apply");
  };
  return (
    <>
        <div className="sm:p-10 py-5 flex flex-col items-center md_2:items-start md_2:px-0">
          <div className="flex flex-col items-center md_2:items-start">
            <h1 className="text-blue-700 text-lg font-bold text-center lg:text-xl md_2:text-start">
              {item.post_name}
            </h1>
            <div className="flex flex-wrap gap-1 justify-center text-xs mt-3 md_2:justify-start">
              <p className="lg:text-sm">{item.department}</p>
              <span>-</span>
              <p className="text-gray-400 text-center lg:text-sm">{item.address}</p>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button
              onClick={handleJobClick}
              className="bg-[#3AD8B6] text-sm font-semibold px-4 py-2 rounded"
            >
              {" "}
              APPLY NOW{" "}
            </button>
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
