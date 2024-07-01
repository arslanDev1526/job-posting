import React from "react";
import { useAuth } from "../../contexts/authprovider";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
  const { show, myRef } = props;
  const { signOut, auth } = useAuth();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/myDasboard");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      console.log("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {show && (
        <div
          ref={myRef}
          id="dropdown"
          className={`absolute right-5 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-38 dark:bg-gray-700
        `}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My Application
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile
              </a>
            </li>

            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleNavigate}
              >
                My Dashboard
              </a>
            </li>

            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
