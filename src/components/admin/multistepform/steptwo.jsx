import React, { useState } from "react";


const StepTwo = ({prevStep, handleFormData, values }) => {
  const [errors, setErrors] = useState({});

    

    prevStep();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    
        let hasError = false;
        const newErrors = {};
    
        if (!values.post_name) {
          hasError = true;
          newErrors.post_name = "This field is required";
        }
    
        if (!values.positions) {
          hasError = true;
          newErrors.positions = "This field is required";
        }
    
        if (!values.department) {
          hasError = true;
          newErrors.department = "This field is required";
        }
    
        if (!values.address) {
          hasError = true;
          newErrors.address = "This field is required";
        }
    
        setErrors(newErrors);
    
        if (!hasError) {
          nextStep();
        }
      };
  return (
    <> 
    <div className='pt-48'> 

        <h1>i am step two</h1>
    <form onSubmit={handleSubmit} className="flex gap-4 flex-col items-center pt-24">
        <div className="relative w-5/6">
          <input
            type="text"
            id="post_name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
              errors.post_name
                ? "border-red-500 focus:border-red-600"
                : "focus:ring-0 focus:border-blue-600"
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
                : "peer-focus:px-2 peer-focus:text-blue-600"
            }`}
          >
            Post Name
          </label>
        </div>
        <div className="relative w-5/6">
          <input
            type="text"
            id="positions"
            className={`${
              errors.positions ? "border-red-500 focus:border-red-600" : ""
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
                : "peer-focus:px-2 peer-focus:text-blue-600"
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
                : "focus:ring-0"
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
                : "peer-focus:px-2 peer-focus:text-blue-600"
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
                : "focus:ring-0 focus:border-blue-600"
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
                : "peer-focus:px-2 peer-focus:text-blue-600"
            } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
          >
            Address
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#3AD8B6] text-sm font-semibold px-8 py-2 rounded cursor-pointer"
        >
          Next
        </button>

        <button
          type="submit"
          className="bg-[#3AD8B6] text-sm font-semibold px-8 py-2 rounded cursor-pointer"
        >
          Prev
        </button>
      </form>
    </div>
    </>
  )
}

export default StepTwo