import React from 'react'
import { Oval } from "react-loader-spinner";


const LoaderBtn = () => {
  return (
    <> 
      <Oval
  visible={true}
  height="25"
  width="25"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </>
  )
}

export default LoaderBtn