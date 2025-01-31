import React, { useState, useEffect } from "react";
import StepOne from "./stepone";
import StepTwo from "./steptwo";
import StepThree from "./stepthree";
import { useLocation, useParams } from "react-router-dom";
import supabase from "../../../config/client";
import { useAuth } from "../../../contexts/authprovider";

const CreateJob = () => {
  const {id:hr_id} = useAuth()

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    post_name: "",
    company_name: "",
    positions: "",
    department: "",
    address: "",
    last_date: "",
    // timing: null,
    // featured: null,
    // img_url: null,
    detail: [],
    summary: [],
    prerequisites: [],
    requirement: [],
    skills: [],
    perks: [],
    responsibilities: [],
    hr_id:hr_id
  });
  console.log(hr_id, "hr_id in createjob")
  const { id } = useParams();
  const location = useLocation();

  console.log(formData, "form data");

  useEffect(() => {
    const fetchData = async () => {
     
      const searchParams = new URLSearchParams(location.search);
      const cardId = searchParams.get("id");
      console.log(cardId, "card id");
      try {
        const { data, error } = await supabase
          .from("job_data")
          .select("*")
          .eq("id", cardId)
          .single();
          if(data){ 
            // Remove fields that should not be included
          const { timing, featured, img_url, ...filteredData } = data;
          setFormData(filteredData);
        }
          if(error){ 
            console.log(error);
          }
        console.log(data, "single data in admin");
      } catch (error) {
        console.log(error);
      }
    };
      fetchData();
  }, [id, location.search]);

  const nextStep = () => {
    console.log("i am clicked");
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
    console.log("i am prev step");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "prerequisites" ||
      name === "requirement" ||
      name === "skills" ||
      name === "perks" ||
      name === "responsibilities" ||
      name === "last_date"

    ) {
      setFormData({
        ...formData,
        [name]: value.split(","),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  switch (step) {
    case 1:
      return (
        <div>
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputChange}
            values={formData}
          />
        </div>
      );

    case 2:
      return (
        <div>
          <StepTwo
            prevStep={prevStep}
            handleFormData={handleInputChange}
            values={formData}
            nextStep={nextStep}
          />
        </div>
      );

    case 3:
      return (
        <div>
          <StepThree />
        </div>
      );
  }
};

export default CreateJob;
