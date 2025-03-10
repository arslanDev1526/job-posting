import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authprovider.jsx";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = (type, setType, setIcon) => {
    setType(type === "password" ? "text" : "password");
    setIcon(type === "password" ? eye : eyeOff);
  };

  const navigate = useNavigate();
  const { login, role, user } = useAuth();
  console.log(user,"user in logn")
  console.log(role,"role in logn")



  const hanldeInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let hasError = false;
    const newErrors = {};
  
    if (!loginData.email) {
      hasError = true;
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      hasError = true;
      newErrors.email = "Invalid email";
    }
  
    if (!loginData.password) {
      hasError = true;
      newErrors.password = "This field is required";
    } else if (loginData.password.length < 8) {
      hasError = true;
      newErrors.password = "Password must be at least 8 characters";
    }
  
    setErrors(newErrors);
  
    if (!hasError) {
      try {
        setLoading(true);
        const response = await login(loginData.email, loginData.password);
        console.log(response, "response from login");
        if (response.error) {
          setMsg(response.error);
        } else {
          if (response.user && response.session) {
            console.log(role, "role after login");
            if (role === 'HR') {
              navigate("/myDasboard");
            } else if (role === 'applicant') {
              navigate("/");
            }
          }
        }
      } catch (error) {
        setMsg("Invalid username or email");
      }
    
      setLoading(false);
    }
  };

  return (
    <>
      <section class="bg-green-200 h-screen flex">
        <div class="w-full px-6 py-8 mx-auto md:h-screen lg:py-0 flex-col items-center justify-center flex">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                    value={loginData.email}
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
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                      errors.password
                        ? "border-red-500"
                        : "focus:ring-0 focus:border-green-600"
                    }`}
                    placeholder=" "
                    name="password"
                    onChange={hanldeInputChange}
                    value={loginData.password}
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
                {msg && <span className="text-red-500 text-sm">{msg}</span>}

                {/* {errorMsg && alert(errorMsg)} */}
                {/* <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  class="w-full hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-5 py-2.5 rounded-md text-md font-semibold text-center text-center"
                  disabled={loading}
                  to={"/jobs"}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
                <p class="text-sm font-light text-gray-500 text-center">
                  New User?{" "}
                  <Link
                    className="font-medium text-green-600 hover:underline dark:text-primary-500"
                    to={"/register"}
                  >
                    {" "}
                    Register{" "}
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

export default Login;
