import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        
      }}
    >
     <Oval
  visible={true}
  height="120"
  width="120"
  strokeWidth="4"
  strokeWidthSecondary="4"
  color="#001281"
  secondaryColor="#001281"
  ariaLabel="oval-loading"
  wrapperStyle={{
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 99,
  }}
  wrapperClass=""
  />
    </div>
  );
};

export default Loader;
