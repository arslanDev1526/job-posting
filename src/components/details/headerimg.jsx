import React from 'react'
import HeaderImage from "../../assets/images/webpack.png";
import Logo from "../../assets/images/logoo.png";

const HeaderImg = () => {
  return (
   <> 
     <div
        className="w-full h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeaderImage})` }}
      >
        <div className="flex justify-center items-center flex-col">
          <div>
            <img src={Logo} alt="" />
          </div>
          <h1 className="text-white text-5xl">PixelPulse</h1>
        </div>
      </div>
   </>
  )
}

export default HeaderImg