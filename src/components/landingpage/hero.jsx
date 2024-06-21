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
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-gray-100 h-screen">
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <p className="text-lg text-gray-700">Welcome to Our Website</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Innovative Solutions
        </h1>
        <p className="text-md md:text-lg text-gray-600">
          We provide the best tech solutions to help you grow your business.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="flex justify-center items-center h-screen">
          <div
            className={`h-96 w-96 border-2 border-yellow-900 rounded-full relative circle-rotate `}
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
    </section>
  );
};

export default Hero;
