import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../config/client.jsx";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeOff);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("applicant");

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = (type, setType, setIcon) => {
    setType(type === "password" ? "text" : "password");
    setIcon(type === "password" ? eye : eyeOff);
  };

  const hanldeInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: undefined });
  };

  const register = async (email, password, fullName, role ) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            displayName: fullName,
            role
          },
        },
      });
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
        // await supabase.from("user").insert([{id: data.user.id, full_name: fullName,}]);
      }
    } catch (error) {
      throw new Error("Error in Creating Account");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = {};

    for (const input in registerData) {
      if (!registerData[input]) {
        hasError = true;
        newErrors[input] = "This field is required";
      }
      if (registerData.fullName.length === 0) {
        hasError = true;
        newErrors.fullName = "Enter a full name";
      }
      if (registerData.email.length === 0) {
        hasError = true;
        newErrors.email = "Enter an email address";
      }
      if (registerData.password.length < 8) {
        hasError = true;
        newErrors.password = "Enter a Strong Password (minimum 8 characters)";
      }
      if (
        registerData.confirmPassword.length === 0 ||
        registerData.confirmPassword !== registerData.password
      ) {
        hasError = true;
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    if (!hasError) {
      try {
        setLoading(true);
        await register(registerData.email, registerData.password, registerData.fullName, role);
      } catch (error) {
        setMsg("Error in Creating Account");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <section className="bg-green-200 h-screen flex">
        <div className="w-full px-6 py-8 mx-auto md:h-screen lg:py-0 flex-col items-center justify-center flex">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="fullname_input"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                      errors.fullName
                        ? "border-red-500"
                        : "focus:ring-0 focus:border-green-600"
                    }`}
                    placeholder=" "
                    name="fullName"
                    onChange={hanldeInputChange}
                    value={registerData.fullName}
                  />
                  <label
                    htmlFor="fullname_input"
                    className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                      errors.fullName
                        ? "peer-focus:px-2 peer-focus:text-red-600"
                        : "peer-focus:px-2 peer-focus:text-green-600"
                    }`}
                  >
                    Full name
                  </label>
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                      errors.email
                        ? "border-red-500"
                        : "focus:ring-0 focus:border-green-600"
                    }`}
                    placeholder=" "
                    name="email"
                    onChange={hanldeInputChange}
                    value={registerData.email}
                    autoComplete="off"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                      errors.email
                        ? "peer-focus:px-2 peer-focus:text-red-600"
                        : "peer-focus:px-2 peer-focus:text-green-600"
                    }`}
                  >
                    Email
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={passwordType}
                    id="password"
                    placeholder=" "
                    name="password"
                    onChange={hanldeInputChange}
                    value={registerData.password}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                      errors.password
                        ? "border-red-500"
                        : "focus:ring-0 focus:border-green-600"
                    }`}
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={() =>
                      togglePasswordVisibility(
                        passwordType,
                        setPasswordType,
                        setPasswordIcon
                      )
                    }
                  >
                    {" "}
                    <Icon
                      className="absolute right-6 top-[.5rem]"
                      icon={passwordIcon}
                      size={20}
                    />{" "}
                  </span>
                  <label
                    htmlFor="password"
                    className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                      errors.password
                        ? "peer-focus:px-2 peer-focus:text-red-600"
                        : "peer-focus:px-2 peer-focus:text-green-600"
                    }`}
                  >
                    Password
                  </label>
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={confirmPasswordType}
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder=" "
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                      errors.password
                        ? "border-red-500"
                        : "focus:ring-0 focus:border-green-600"
                    }`}
                    onChange={hanldeInputChange}
                    value={registerData.confirmPassword}
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={() =>
                      togglePasswordVisibility(
                        confirmPasswordType,
                        setConfirmPasswordType,
                        setConfirmPasswordIcon
                      )
                    }
                  >
                    {" "}
                    <Icon
                      className="absolute right-6 top-[.5rem]"
                      icon={confirmPasswordIcon}
                      size={20}
                    />{" "}
                  </span>
                  <label
                    htmlFor="confirm-password"
                    className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                      errors.confirmPassword
                        ? "peer-focus:px-2 peer-focus:text-red-600"
                        : "peer-focus:px-2 peer-focus:text-green-600"
                    }`}
                  >
                    Confirm Password
                  </label>
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>


                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    className="mt-1 w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    value={role}
                    onChange={handleRoleChange}
                  >
                    <option value="applicant">Applicant</option>
                    <option value="HR">HR</option>
                   
                  </select>
                </div>
                {msg && <span className="text-green-500 text-sm">{msg}</span>}

                <button
                  type="submit"
                  className="w-full hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold text-center"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
                <p className="text-sm font-light text-gray-500 text-center">
                  Already a user?{" "}
                  <Link
                    className="font-medium text-green-600 hover:underline dark:text-primary-500"
                    to={"/login"}
                  >
                    {" "}
                    Login{" "}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
