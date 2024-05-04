import { useState, useRef, useEffect } from "react";
import supabase from "../../config/client.jsx";
import Loader from "../loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  skillOptions,
  sourceOptions,
  genderOptions,
} from "../../assets/data/jobsdata.jsx";

const JobApply = () => {

  const navigate = useNavigate();
  const dropdownMenue = useRef(null);
  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    skills: [],
    gender: "",
    source: "",
    professionalExperience: "",
  });

  const [isSkillDropdownOpen, setIsSkillDropdownOpen] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const simulateUpload = async () => {
    setProgress(0);
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setProgress(i);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setErrors({ ...errors, selected: undefined });
    simulateUpload();
  };

  const hanldeInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSkillOption = (option) => {
    setFormData({
      ...formData,
      skills: formData.skills.includes(option)
        ? formData.skills.filter((skill) => skill !== option)
        : [...formData.skills, option],
    });
    setErrors({ ...errors, skills: undefined });
  };

  const closeOpenMenues = (e) => {
    if (
      isSkillDropdownOpen &&
      !dropdownMenue.current?.contains(e.target) &&
      !e.target.closest(".skillDropdown")
    ) {
      setIsSkillDropdownOpen(false);
    }
    if (
      isGenderDropdownOpen &&
      !dropdownMenue.current?.contains(e.target) &&
      !e.target.closest(".genderDropdown")
    ) {
      setIsGenderDropdownOpen(false);
    }
    if (
      isSourceOpen &&
      !dropdownMenue.current?.contains(e.target) &&
      !e.target.closest(".sourceDropdown")
    ) {
      setIsSourceOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenues);

    return () => document.removeEventListener("mousedown", closeOpenMenues);
  }, [isSkillDropdownOpen, isGenderDropdownOpen, isSourceOpen]);

  const handleSkillDropdown = () => {
    setIsSkillDropdownOpen(!isSkillDropdownOpen);
  };

  const handleSourceDropdown = () => {
    setIsSourceOpen(!isSourceOpen);
  };

  const handleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
  };

  const handleOptionSource = (source) => {
    setFormData({
      ...formData,
      source: source,
    });
    setErrors({ ...errors, source: undefined });
    setIsSourceOpen(false);
  };

  const handleOptionClick = (gender) => {
    setFormData({
      ...formData,
      gender: gender,
    });
    setErrors({ ...errors, gender: undefined });
    setIsGenderDropdownOpen(false);
  };

  console.log(selectedFile, "beforeselectedFile");

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let hasError = false;
    const newErrors = {};
    for (const input in formData) {
      if (!formData[input]) {
        hasError = true;
        newErrors[input] = "This field is required";
      }
    }

    if (formData.skills.length === 0) {
      hasError = true;
      newErrors["skills"] = "At least one skill is required";
    }

    if (formData.gender.length === 0) {
      hasError = true;
      newErrors["gender"] = "At least one gender is required";
    }

    if (formData.source.length === 0) {
      hasError = true;
      newErrors["source"] = "At least one source is required";
    }

    if (!selectedFile) {
      hasError = true;
      newErrors["selected"] = "At least one selected file is required";
    }

    setErrors(newErrors);

    console.log(errors, "errors");
    console.log(newErrors, "newErrors");
    console.log(errors.selectedFile, "selectedFile error");
    console.log(errors.fullName, "fullnME error");

    if (!hasError) {
      try {
        setLoading(true);

       

        const { data, error } = await supabase.storage
          .from("cv_data")
          .upload(`applicants_cv/${selectedFile.name}`, selectedFile);

        if (error) {
          console.log("Error uploading file:", error);
        }

        console.log(formData, "formData");

        const { data: insertData, error: insertError } = await supabase
          .from("applications_data")
          .insert(formData);

        setLoading(false);
        if (insertError) {
          console.log("Error inserting data:", insertError);
          toast.error("Error loading data!");
          return;
        }

        console.log("Data inserted successfully:", insertData);
        toast.success("Applied Successfully");

        setTimeout(() => {
        navigate("/");
        }, 5000);

        setSelectedFile(null);
        inputRef.current.value = null;
        setProgress(0);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          skills: [],
          gender: "",
          source: "",
          professionalExperience: "",
        });

        console.log(selectedFile, "selectedFile");
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <div className={`${loading ? "blur-[1px] pointer-events-none" : ""}`}>
        <h2 className="text-center my-5 text-2xl">Job Application</h2>
        <form className="flex gap-4 flex-col items-center">
          {/* <FileUpload/> */}
          <div className="flex items-center justify-center w-5/6">
            <div
              className={`border border-dotted  rounded-md flex flex-col justify-center w-full h-32 ${
                errors.selected ? "border-red-500" : "border-gray-500"
              }`}
            >
              <input
                id="cv-upload"
                type="file"
                className={`mx-auto w-56 ${
                  progress === 100 ? "text-blue-400" : "text-gray-700"
                }`}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                ref={inputRef}
              />

              {progress > 0 && progress < 100 && (
                <div className=" rounded-lg px-4 mt-5">
                  <div
                    className="h-2 bg-green-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>

          <div class="relative w-5/6">
            <input
              type="text"
              id="fullname_input"
              class={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                errors.fullName
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              }`}
              placeholder=" "
              name="fullName"
              onChange={hanldeInputChange}
              value={formData.fullName}
            />
            <label
              for="fullname_input"
              class={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                errors.fullName
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              }`}
            >
              Full name
            </label>
          </div>
          <div class="relative w-5/6">
            <input
              type="email"
              id="email_input"
              class={`${
                errors.email
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              name="email"
              value={formData.email}
              onChange={hanldeInputChange}
            />
            <label
              for="email_input"
              class={`${
                errors.email
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Email
            </label>
          </div>
          <div class="relative w-5/6">
            <input
              type="number"
              id="phone_input"
              class={`${
                errors.phone
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none  focus:outline-none peer`}
              placeholder=" "
              name="phone"
              value={formData.phone}
              onChange={hanldeInputChange}
            />
            <label
              for="phone_input"
              class={`${
                errors.phone
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Phone
            </label>
          </div>
          <div class="relative w-5/6">
            <input
              type="text"
              id="address_input"
              class={`${
                errors.address
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              name="address"
              value={formData.address}
              onChange={hanldeInputChange}
            />
            <label
              for="address_input"
              class={`${
                errors.address
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Address
            </label>
          </div>
          <div class="relative w-5/6">
            <input
              type="text"
              id="city_input"
              class={`${
                errors.city
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              name="city"
              value={formData.city}
              onChange={hanldeInputChange}
            />
            <label
              for="city_input"
              class={`${
                errors.city
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              City
            </label>
          </div>

          <div class="relative w-5/6">
            <input
              type="text"
              id="skill_input"
              class={`${
                errors.skills
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              onClick={handleSkillDropdown}
              value={formData.skills}
              onChange={hanldeInputChange}
            />
            <label
              for="skill_input"
              class={`${
                errors.skills
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Skills
            </label>

            {isSkillDropdownOpen && (
              <ul className="skillDropdown absolute top-full left-0 w-full border border-gray-300 bg-white shadow-lg z-10 h-48 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                {skillOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      formData.skills.includes(option)
                        ? "bg-green-300 text-white hover:bg-green-500"
                        : ""
                    }`}
                    onClick={() => handleSkillOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative w-5/6">
            <input
              type="text"
              id="gender_input"
              className={`${
                errors.gender
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              name="gender"
              onClick={handleGenderDropdown}
              value={formData.gender}
              readOnly
            />
            <label
              for="gender_input"
              className={`${
                errors.gender
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-1 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Gender
            </label>
            {isGenderDropdownOpen && (
              <ul className="genderDropdown absolute top-full left-0 w-full border border-gray-300 bg-white shadow-lg z-10">
                {genderOptions.map((gender) => (
                  <li
                    key={gender}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleOptionClick(gender)}
                  >
                    {gender}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative w-5/6">
            <input
              type="text"
              id="source_input"
              className={`${
                errors.source
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              name="source"
              onClick={handleSourceDropdown}
              value={formData.source}
              readOnly
            />
            <label
              for="source_input"
              className={`${
                errors.source
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Source
            </label>
            {isSourceOpen && (
              <ul className="sourceDropdown absolute top-full left-0 w-full border border-gray-300 bg-white shadow-lg z-10">
                {sourceOptions.map((source) => (
                  <li
                    key={source}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleOptionSource(source)}
                  >
                    {source}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div class="relative w-5/6">
            <input
              type="text"
              id="experience_input"
              class={`${
                errors.professionalExperience
                  ? "border-red-500"
                  : "focus:ring-0 focus:border-blue-600"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
              placeholder=" "
              name="professionalExperience"
              value={formData.professionalExperience}
              onChange={hanldeInputChange}
            />
            <label
              for="experience_input"
              class={`${
                errors.professionalExperience
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-blue-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Professional Experience
            </label>
          </div>

          <div className="w-5/6 flex gap-3 justify-end py-10">
            <button className="bg-gray-600 px-5 py-1 rounded-lg text-white">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-green-500 px-5 py-1 rounded-lg text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading" : "Save"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default JobApply;
