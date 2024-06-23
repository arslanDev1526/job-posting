import React from "react";

const Hero = () => {
  const imageUrls = [
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40d989d6cb18ee9c69_team-4.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40443bf03ec2af8e46_team-5.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40a4c62aae3e4fe14c_team-6.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc4167bb8d2612498d5b_team-7.jpg",
  ];
  return (
    <div className="w-full flex flex-col lg:pt-16 py-10 lg:flex-row items-center justify-between bg-green-50">
      <div className="w-full lg:w-1/2 px-5 space-y-4 text-center md:text-left mt-20 lg:mt-0">
        <p className="text-lg text-gray-700 text-center">Welcome to Our Website</p>
        <h1 className="text-3xl md:text-4xl md:text-center font-bold text-gray-900">
          Innovative Solutions
        </h1>
        <p className="text-md md:text-center md:text-lg text-gray-600">
          We provide the best tech solutions to help you grow your business.
        </p>
      </div>
      <div className="hidden md:block lg:w-1/2 mt-8 lg:flex lg:justify-center">
          <div
            className={`h-80 w-80 md:h-96 md:w-96 border-2 border-yellow-900 rounded-full relative circle-rotate`}
          >
           
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="absolute top-40 left-40 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${
                    index * 60
                  }deg) translate(180px) rotate(${-index * 60}deg)`,
                }}
              >
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-16 h-16 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Hero;
