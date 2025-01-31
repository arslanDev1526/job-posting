import { useState, useRef, useEffect } from "react";
import supabase from "../../config/client.jsx";
import Loader from "../loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  skillOptions,
  sourceOptions,
  genderOptions,
} from "../../assets/data/jobsdata.jsx";
import { useAuth } from '../../contexts/authprovider.jsx';


const JobApply = () => {
 const {id, role, user} = useAuth();
 console.log(id, "id in applicant");
 const {id:job_id} = useParams()

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
    applicant_id:id,
    job_id:job_id
  });

  console.log(formData,"formData applicant")

  const [isSkillDropdownOpen, setIsSkillDropdownOpen] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName , setFileName] = useState(null);
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
    setFileName(file.name);
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

    if (!hasError) {
      try {
        setLoading(true);

        const { data: fileData, error:fileError } = await supabase.storage
          .from("cv_data")
          .upload(`applicants_cv/${selectedFile.name}`, selectedFile, { 
            cacheControl:"3600",
            upsert:false
          });
          if(fileError){ 
            setLoading(false);
            console.log(fileError,"fileError");
            toast.error("Error uploading CV!");
            return;
          }
          const {publicURL, error:urlError} = supabase.storage
          .from("cv_data")
          .getPublicUrl(`applicants_cv/${selectedFile.name}`);

          if(urlError) { 
            setLoading(false);
            toast.error("Error generation CV URL!");
            return;
          }
          
          const formDataWithCv = { 
            ...formData,
            cv_url:publicURL,
          }
        const { data: insertData, error: insertError } = await supabase
          .from("applications_data")
          .insert(formDataWithCv);

        setLoading(false);
        if (insertError) {
          toast.error("Error loading data!");
          console.log(error,"error in sending data")
          return;
        }

        toast.success("Applied Successfully");

        // setTimeout(() => {
        //   navigate("/detail/:id");
        // }, 5000);

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

      } catch (error) {
        //add toast here
      }
    }
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <div className="max-w-7xl w-full mx-auto px-5"> 

      <div className={`${loading ? "blur-[1px] pointer-events-none" : ""}`}>
        <h2 className="text-center mb-10 md:mb-20 text-lg md:text-xl font-bold text-green-700 lg:text-3xl pt-28 md:pt-40">
          Job Application
        </h2>
        <form className="flex gap-4 flex-col items-center">
          <div className="flex items-center justify-center w-5/6">
            <div
              className={`border border-dotted  rounded-md flex flex-col justify-center w-full h-32 ${
                errors.selected ? "border-red-500" : "border-gray-500"
              }`}
            >
              <label
                htmlFor="cv-upload"
                className={`mx-auto w-auto ${
                  progress === 100
                    ? "hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold"
                    : "bg-green-200 text-green-900 hover:bg-green-900 hover:text-white px-5 py-2.5 rounded-md text-md font-semibold"
                } cursor-pointer p-2 rounded-md flex justify-center items-center mx-auto w-auto px-4 py-2`}
              >
                <input
                  id="cv-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  ref={inputRef}
                />
                <span>{ fileName || "Upload CV"}</span>
              </label>

              {progress > 0 && progress < 100 && (
                <div className=" rounded-lg px-4 mt-5">
                  <div
                    className="h-2 bg-green-600"
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-2 focus:border-green-500"
              }`}
              placeholder=" "
              name="fullName"
              onChange={hanldeInputChange}
              value={formData.fullName}
            />
            <label
              for="fullname_input"
              class={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 bg-gray-100 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                errors.fullName
                  ? "peer-focus:px-2 peer-focus:text-red-600"
                  : "peer-focus:px-2 peer-focus:text-green-600"
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
              } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Skills
            </label>

            {isSkillDropdownOpen && (
              <ul className="skillDropdown absolute top-full left-0 w-full border border-gray-300 bg-gray-100 shadow-lg z-10 h-48 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-1 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Gender
            </label>
            {isGenderDropdownOpen && (
              <ul className="genderDropdown absolute top-full left-0 w-full border border-gray-300 bg-gray-100 shadow-lg z-10">
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Source
            </label>
            {isSourceOpen && (
              <ul className="sourceDropdown absolute top-full left-0 w-full border border-gray-300 bg-gray-100 shadow-lg z-10">
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
                  ? "border-red-500 focus:border-red-600"
                  : "focus:ring-0 focus:border-green-500"
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
                  : "peer-focus:px-2 peer-focus:text-green-600"
              } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
              Professional Experience
            </label>
          </div>

          <div className="w-5/6 flex gap-3 justify-end py-10">
            {/* <button className="bg-gray-400 text-sm font-semibold px-8 py-2 rounded cursor-pointer">
              Cancel
            </button> */}
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-green-200 text-green-900 hover:bg-green-900 hover:text-white px-5 py-2 rounded-md text-md font-semibold cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading" : "Apply"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
      </div>

    </>
  );
};

export default JobApply;
