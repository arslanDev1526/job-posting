// import React, { useEffect, useState, useRef } from "react";
// import Logo from "../assets/images/logoo.png";

// const Navbar = () => {
//     const myRef = useRef();
//     const buttonRef = useRef();
//   const [show, setShow] = useState(false);

//   useEffect(()=> { 
//     const checkIfClickedOutsie = e => { 
//         if(show && myRef.current && !buttonRef.current.contains(e.target)) { 
//             setShow(false);
//         }
//         console.log("i am click",show);
//     }
//     document.addEventListener("mousedown",checkIfClickedOutsie )

//     return () => {
//         // Cleanup the event listener
//         document.removeEventListener("mousedown", checkIfClickedOutsie)
//       }
//   },[show])

//   const toggleMenu = () => {
//     setShow(!show);
//   };
//   return (
//     <>
//       <div className="flex justify-between px-5 py-1 bg-gradient-to-r from-teal-500 to-indigo-800">
//         <div className="flex items-center gap-3">
//           <div>
//             <img className="w-14 h-16" src={Logo} alt="" />
//           </div>
//           <h1>
//             <span className="text-white font-semibold text-xl">Pixel</span>
//             <span className="text-white text-xl">Pulse</span>
//           </h1>
//         </div>

//         <div className="flex items-center gap-3 relative">
//           <h2 className="text-white text-lg">david cornay</h2>
//           <div
//             ref={buttonRef}
//             onClick={toggleMenu}
//             id="dropdownDefaultButton"
//             data-dropdown-toggle="dropdown"
//           >
//             <img
//               className="h-10 w-10 rounded-full"
//               src="https://lh3.googleusercontent.com/a/ACg8ocI6izRc1Hv_yEUbMuiHZA6z7s8kowcZLNbNY63BPyoXNp4jLQ=s96-c"
//               alt="userLogo"
//             />
//           </div>
//         </div>
//       </div>

//       {/* <!-- Dropdown menu --> */}

//       {show && <div
//         ref={myRef}
//         id="dropdown"
//         class={`absolute right-5 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-38 dark:bg-gray-700
//         `}
//       >
//         <ul
//           class="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDefaultButton"
//         >
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               My Application
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Profile
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Logout
//             </a>
//           </li>
//         </ul>
//       </div>}
    
//     </>
//   );
// };

// export default Navbar;
