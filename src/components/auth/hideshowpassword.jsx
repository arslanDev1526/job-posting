// import React, { useState } from "react";
// import { Icon } from "react-icons-Kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";

// const HideShowPassword = () => {
//   const [type, setType] = useState("password");
//   const [icon, setIcon] = useState(eyeOff);

//   const handleToggle = () => {
//     if (type === "password") {
//       setIcon(eye);
//       setType("text");
//     } else {
//       setIcon(eyeOff);
//       setType("password");
//     }
//   };
//   return (
//     <>
//       <span className="flex justify-around items-center" onClick={handleToggle}>
//         {" "}
//         <Icon className="absolute right-6 top-8" icon={icon} size={20} />{" "}
//       </span>
//     </>
//   );
// };

// export default HideShowPassword;
