import React from "react";
import { useNavigate } from "react-router-dom";

const ApplyButton = ({ item }) => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate("/job_apply");
  };
  return (
    <>
      <div className="px-5">
        <div className="py-8 flex justify-between border-b-[1px] grey-green-500">
          <div className="">
            <h1 className="text-blue-700 text-3xl font-semibold">
              {item.post_name}
            </h1>
            <div className="flex gap-2 mt-1">
              <p>{item.department}</p>
              <span>-</span>
              <p>{item.address}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleJobClick}
              className="bg-green-500 px-4 py-2 rounded"
            >
              {" "}
              APPLY NOW{" "}
            </button>
            <button className="bg-green-500 px-4 py-2 rounded ml-5">
              {" "}
              REFER CANDIDATE{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyButton;
