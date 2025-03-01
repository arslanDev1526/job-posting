import React, { useState } from "react";
import supabase from "../../../config/client.jsx";
import LoaderBtn from "../../loaderbtn.jsx";

const StepTwo = ({ prevStep, handleFormData, values, nextStep }) => {
  const [errors, setErrors] = useState({});
  const[loader,setLoader] = useState(false);

  const handleSubmit = async (e) => {
    console.log(" i am submitting");
    e.preventDefault();

    let hasError = false;
    const newErrors = {};

    for (const input in values) {
      if (
        !values[input] ||
        (Array.isArray(values[input]) &&
          (values[input].length === 0 ||
            values[input].every(
              (item) => typeof item === "string" && item.trim() === ""
            )))
      ) {
        hasError = true;
        newErrors[input] = "This field is required";
      }
    }

    setErrors(newErrors);
    console.log("i am here here");
    nextStep();

    setLoader(true);

    if (hasError) {
      console.log("i am theer here");

      const { data, error } = await supabase.from("job_data").upsert(values);
      if (error) {
        console.error("Error upserting data:", error.message);
        // Handle error state or show error message to user
      } else {
        console.log("Data upserted successfully:", values);
        nextStep();
      }
    }
    setLoader(false);

  };

  return (
    <>
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 flex-col items-center pt-24"
          >
            <div className="relative w-5/6">
              <textarea
                id="summary"
                className={`${
                  errors.summary  ?  " focus:ring-0 border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                placeholder=""
                name="summary"
                value={values.summary}
                onChange={handleFormData}
              />
              <label
                htmlFor="summary"
                className={`${
                  errors.summary
                    ? "peer-focus:px-2 peer-focus:text-red-600"
                    : "peer-focus:px-2 peer-focus:text-green-600"
                } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
              >
                Summary
              </label>
            </div>

            <div className="relative w-5/6">
              <textarea
                id="prerequisites"
                className={`${
                  errors.prerequisites
                  ? "focus:ring-0 border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                placeholder=""
                name="prerequisites"
                value={values.prerequisites.join(",")}
                onChange={handleFormData}
              />
              <label
                htmlFor="prerequisites"
                className={`${
                  errors.prerequisites
                    ? "peer-focus:px-2 peer-focus:text-red-600"
                    : "peer-focus:px-2 peer-focus:text-green-600"
                } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
              >
                Prerequisites
              </label>
            </div>

            <div className="relative w-5/6">
              <textarea
                id="requirement"
                className={`${
                  errors.requirement
                    ? "focus:ring-0 border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                placeholder=" "
                name="requirement"
                value={values.requirement.join(",")}
                onChange={handleFormData}
              />
              <label
                htmlFor="requirement"
                className={`${
                  errors.requirement
                    ? "peer-focus:px-2 peer-focus:text-red-600"
                    : "peer-focus:px-2 peer-focus:text-green-600"
                } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
              >
                Requirement
              </label>
            </div>

            <div className="relative w-5/6">
              <textarea
                id="skills"
                className={`${
                  errors.skills ? "focus:ring-0 border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                placeholder=" "
                name="skills"
                value={values.skills.join(",")}
                onChange={handleFormData}
              />
              <label
                htmlFor="skills"
                className={`${
                  errors.skills
                    ? "peer-focus:px-2 peer-focus:text-red-600"
                    : "peer-focus:px-2 peer-focus:text-green-600"
                } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
              >
                Skills
              </label>
            </div>
            <div className="relative w-5/6">
              <textarea
                id="perks"
                className={`${
                  errors.perks ? "focus:ring-0 border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                placeholder=""
                name="perks"
                value={values.perks.join(",")}
                onChange={handleFormData}
              />
              <label
                htmlFor="perks"
                className={`${
                  errors.perks
                    ? "peer-focus:px-2 peer-focus:text-red-600"
                    : "peer-focus:px-2 peer-focus:text-green-600"
                } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
              >
                Perks
              </label>
            </div>

            <div className="relative w-5/6">
              <textarea
                id="responsibilities"
                className={`${
                  errors.responsibilities ? "focus:ring-0 border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                placeholder=" "
                name="responsibilities"
                value={values.responsibilities.join(",")}
                onChange={handleFormData}
              />
              <label
                htmlFor="responsibilities"
                className={`${
                  errors.responsibilities
                    ? "peer-focus:px-2 peer-focus:text-red-600"
                    : "peer-focus:px-2 peer-focus:text-green-600"
                } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
              >
                Responsibilities
              </label>
            </div>
            <div className="flex gap-5 my-14">
              <button
                onClick={prevStep}
                className="hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold mt-5"
              >
                Back
              </button>
              <button
              disabled={loader}
                type="submit"
                className="hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold mt-5"
              >
                {loader ? <LoaderBtn/> : 'Apply'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
