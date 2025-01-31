import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const StepThree = () => {
  const navigate = useNavigate();
  const handleNavigate = ( ) => { 
    navigate('/myDasboard')
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-screen pt-24">
        <div className="bg-green-100 flex flex-col items-center gap-5 p-8 md:p-10 rounded-sm">
          <GrStatusGood size={100} color="green" />
          <h1 className="text-lg md:text-3xl md:font-semibold">Job Created Successfully</h1>
          <button
          onClick={handleNavigate}
            type="submit"
            className="hover:opacity-80 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold mt-5"
          >
            Back to Main Page
          </button>
        </div>
      </div>
    </>
  );
};

export default StepThree;
