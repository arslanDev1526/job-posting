import React, { useState } from "react";

const StepOne = ({ nextStep, values, handleFormData }) => {
  const [errors, setErrors] = useState({});
  console.log(errors, "StepOne erroe");

  const handleSubmitStepOne = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = {};

    for (const input in values) {
      if (!values[input]) {
        hasError = true;
        newErrors[input] = "This field is required";
      }
    }

    setErrors(newErrors);

    if (!hasError) {
      nextStep();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen"> 

    <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10 w-full">
      <form
        onSubmit={handleSubmitStepOne}
        className="flex gap-4 flex-col items-center pt-24"
      >
        <div className="relative w-5/6">
          <input
            type="text"
            id="post_name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none focus:outline-none peer ${
              errors.post_name
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 focus:ring-0 focus:border-green-600"
            }`}
            placeholder=" "
            name="post_name"
            onChange={handleFormData}
            value={values.post_name}
          />
          <label
            htmlFor="post_name"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 bg-gray-100 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
              errors.post_name
                ? "peer-focus:px-2 peer-focus:text-red-600"
                : "peer-focus:px-2 peer-focus:text-green-600"
            }`}
          >
            Post Name
          </label>
        </div>

        <div className="relative w-5/6">
          <input
            type="text"
            id="company_name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none focus:outline-none peer ${
              errors.company_name
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 focus:ring-0 focus:border-green-600"
            }`}
            placeholder=" "
            name="company_name"
            onChange={handleFormData}
            value={values.company_name}
          />
          <label
            htmlFor="company_name"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 bg-gray-100 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
              errors.company_name
                ? "peer-focus:px-2 peer-focus:text-red-600"
                : "peer-focus:px-2 peer-focus:text-green-600"
            }`}
          >
            Company Name
          </label>
        </div>
        <div className="relative w-5/6">
          <input
            type="text"
            id="positions"
            className={`${
              errors.positions ? "border-red-500 focus:border-red-600" : " focus:border-green-600"
            } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
            placeholder=" "
            name="positions"
            value={values.positions}
            onChange={handleFormData}
          />
          <label
            htmlFor="positions"
            className={`${
              errors.positions
                ? "peer-focus:px-2 peer-focus:text-red-600"
                : "peer-focus:px-2 peer-focus:text-green-600"
            } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
          >
            Position
          </label>
        </div>
        <div className="relative w-5/6">
          <input
            type="text"
            id="department"
            className={`${
              errors.department
                ? "border-red-500 focus:border-red-600"
                : "focus:ring-0 focus:border-green-600"
            } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
            placeholder=" "
            name="department"
            value={values.department}
            onChange={handleFormData}
          />
          <label
            htmlFor="department"
            className={`${
              errors.department
                ? "peer-focus:px-2 peer-focus:text-red-600"
                : "peer-focus:px-2 peer-focus:text-green-600"
            } bg-gray-100 absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
          >
            Department
          </label>
        </div>
        <div className="relative w-5/6">
          <input
            type="text"
            id="address"
            className={`${
              errors.address
                ? "border-red-500 focus:border-red-600"
                : "focus:ring-0 focus:border-green-600"
            } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
            placeholder=" "
            name="address"
            value={values.address}
            onChange={handleFormData}
          />
          <label
            htmlFor="address"
            className={`${
              errors.address
                ? "peer-focus:px-2 peer-focus:text-red-600"
                : "peer-focus:px-2 peer-focus:text-green-600"
            } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
          >
            Address
          </label>
        </div>

        <div className="relative w-5/6">
          <input
            type="phone"
            id="last_date"
            className={`${
              errors.last_date
                ? "border-red-500 focus:border-red-600"
                : "focus:ring-0 focus:border-green-600"
            } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
            placeholder="dd/mm/yyyy"
            name="last_date"
            value={values.last_date}
            onChange={handleFormData}
          />
          <label
            htmlFor="last_date"
            className={`${
              errors.last_date
                ? "peer-focus:px-2 peer-focus:text-red-600"
                : "peer-focus:px-2 peer-focus:text-green-600"
            } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
          >
            Last Date
          </label>
        </div>
        {/* <div
          className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:justify-start lg:gap-80 w-5/6 mt-5 border border-red-500
        "
        >
          <div className="">
            <span>Featured</span>
            <div className="mt-5 flex gap-12 border border-green-700">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="full_time" id="full_time" />
                <label htmlFor="full_time"> Full Time </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className=""
                  type="checkbox"
                  name="yes"
                  id="part_time"
                />
                <label className="" htmlFor="part_time">
                  {" "}
                  Yes{" "}
                </label>
              </div>
            </div>
          </div>

          <div>
            <span>Timing</span>
            <div className="mt-5 flex gap-12 border border-green-700">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="full_time" id="full_time" />
                <label htmlFor="full_time"> Full Time </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className=""
                  type="checkbox"
                  name="part_time"
                  id="part_time"
                />
                <label className="" htmlFor="part_time">
                  {" "}
                  Part Time{" "}
                </label>
              </div>
            </div>
          </div>
        </div> */}

        <button
          type="submit"
          className="hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold mt-5"
        >
          Continue
        </button>
      </form>
    </div>
    </div>

  );
};

export default StepOne;
