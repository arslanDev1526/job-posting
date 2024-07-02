// import React,{useState, useRef, useEffect} from "react";
// import { useAuth } from "../../contexts/authprovider";
// import { Outlet, useNavigate } from "react-router-dom";

// const Dropdown = () => {
//   // const { show, myRef } = props;
//   const { signOut, auth } = useAuth();
//   const myRef = useRef();
//   const buttonRef = useRef();
// const [show, setShow] = useState(false);

// useEffect(()=> {
//   const checkIfClickedOutsie = e => {
//       if(show && myRef.current && !buttonRef.current.contains(e.target)) {
//           setShow(false);
//       }
//   }
//   document.addEventListener("click",checkIfClickedOutsie )

//   return () => {
//       document.removeEventListener("click", checkIfClickedOutsie)
//     }
// },[show])

//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/myDasboard");
//   };

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       await signOut();
//       console.log("Logged out successfully");
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {show && (
//         <div
//           ref={myRef}
//           id="dropdown"
//           className={`absolute right-5 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-38 dark:bg-gray-700
//         `}
//         >
//           <ul
//             className="py-2 text-sm text-gray-700 dark:text-gray-200"
//             aria-labelledby="dropdownDefaultButton"
//           >
//             <li>
//               <a
//                 href=""
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 My Application
//               </a>
//             </li>
//             <li>
//               <a
//                 href=""
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Profile
//               </a>
//             </li>

//             <li>
//               <a
//                 href=""
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 onClick={handleNavigate}
//               >
//                 My Dashboard
//               </a>
//             </li>

//             <li>
//               <a
//                 href=""
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Dropdown;

import React, { useState, useEffect } from "react";
import supabase from "../../config/client.jsx";
import { FaCircleUser } from "react-icons/fa6";

const Dropdown = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      console.log("Logged out successfully");
      setShow(!show);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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

            {/* <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleNavigate}
              >
                My Dashboard
              </a>
            </li> */}

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

      <div className="flex items-center gap-3 hover:cursor-pointer">
        {user ? (
          <>
            <h1 className="text-green-600 hover:text-slate-700 py-2 text-lg font-semibold">
              {user.user_metadata.displayName}
            </h1>
            <div className="" onClick={handleUserDropdown}>
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
