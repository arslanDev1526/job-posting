import React, { useState } from 'react'
import StepOne from './stepone';
import StepTwo from './steptwo';


const CreateJob = () => {
    const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        post_name: "",
        positions: "",
        department: "",
        address: "",
        detail: [],
      });

      const [newDetail, setNewDetail] = useState({
        perks: [],
        skills: [],
        summary: '',
        required: [],
        prerequisites: [],
        responsibilities: [],
      });

      const nextStep = () => { 
        setStep(step + 1);
      }

      const prevStep = ( ) => { 
        setStep(step - 1);

      }

      const hanldeInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // setErrors({ ...errors, [name]: undefined });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("i am clicked");
    
        let hasError = false;
        const newErrors = {};
        for (const input in cardsData) {
          if (!cardsData[input]) {
            hasError = true;
            newErrors[input] = "This field is required";
          }
        }
    
        if (cardsData.post_name.length === 0) {
          hasError = true;
          newErrors["post_name"] = "At least one skill is required";
        }
    
        if (cardsData.positions.length === 0) {
          hasError = true;
          newErrors["positions"] = "At least one gender is required";
        }
    
        if (cardsData.department.length === 0) {
          hasError = true;
          newErrors["department"] = "At least one source is required";
        }
    
        if (cardsData.address.length === 0) {
          hasError = true;
          newErrors["address"] = "At least one source is required";
        }
    
        setErrors(newErrors);
    
        if (!hasError) {
          try {
            setLoading(true);
    
            const { data, error } = await supabase
              .from("job_data")
              .upsert(cardsData);
    
            console.log("i am ok");
    
            setLoading(false);
            setShowModal(false);
            if (error) {
              console.error("Error posting data", error);
              //   toast.error("Error loading data!");
              return;
            }
    
            console.log("data loded successfully", data);
            // toast.success("Applied Successfully");
    
            setCardsData({
              post_name: "",
              positions: "",
              department: "",
              address: "",
              detail: [],
            });
          } catch (error) {
            //add toast here
          }
        }
      };

      switch (step) { 
        case 1:
        return ( 
            <div> 
                <StepOne nextStep={nextStep} handleFormData={hanldeInputChange} values={formData}/>
            </div>
        )

        case 2:
            return ( 
                <div> 
                    <StepTwo prevStep={prevStep} handleFormData={hanldeInputChange} values={formData}/>
                </div>
            );
            default:
                return (
                  <div >
                    i am by ddefault
                  </div>
                );
      }

}



export default CreateJob
