import React, { useState, useEffect, useRef } from "react";
import supabase from "../../config/client.jsx";
import { FaCircleUser } from "react-icons/fa6";

const Dropdown = ({handleLogout}) => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const dropdownRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const checkIfClickedOutsie = (e) => {
      if (
        show &&
        dropdownRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutsie);

    return () => {
      document.removeEventListener("click", checkIfClickedOutsie);
    };
  }, [show]);

 

  const handleUserDropdown = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      {show && (
        <div
          ref={dropdownRef}
          id="dropdown"
          className={`absolute right-0 top-14 z-10 bg-white rounded-sm shadow w-32 px-3
        `}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                // href=""
                className="block py-2 text-slate-600 hover:text-green-700 text-md font-semibold"
              >
                My Application
              </a>
            </li>
            <li>
              <a
                // href=""
                className="block py-2 text-slate-600 hover:text-green-700 text-md font-semibold"
              >
                Profile
              </a>
            </li>

            {/* <li>
              <a
                href=""
                className="block py-2 text-slate-600 hover:text-green-700 text-md font-semibold"
                onClick={handleNavigate}
              >
                My Dashboard
              </a>
            </li> */}

            <li>

              
              <button
                className="block py-2 text-slate-600 hover:text-green-700 text-md font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="flex items-center gap-3 hover:cursor-pointer">
        {user ? (
          <>
            <h1 className="text-green-600 hover:text-slate-700 py-2 text-lg font-semibold">
              {user.user_metadata.displayName}
            </h1>
            <div ref={buttonRef} className="" onClick={handleUserDropdown}>
              <FaCircleUser size={32} />
            </div>
          </>
        ) : (
          <p> </p>
        )}
      </div>
    </>
  );
};

export default Dropdown;
