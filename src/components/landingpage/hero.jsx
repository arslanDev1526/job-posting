import React from "react";

const Hero = () => {
  const imageUrls = [
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40d989d6cb18ee9c69_team-4.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40443bf03ec2af8e46_team-5.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40a4c62aae3e4fe14c_team-6.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc4167bb8d2612498d5b_team-7.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc401901803c2996eda6_team-3.jpg",
  ];

  return (
    <div className="bg-green-50 flex justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-24 py-16">
          <div className="w-full lg:w-1/2 space-y-4 text-center md:text-left mt-20 lg:mt-0">
            <span className="bg-white text-green-900 px-3 py-2 rounded-md">
              Build your future with us
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-900">
              Get your dream job with PixelPulse.
            </h1>
            <p className="text-md md:text-lg text-green-900 font-medium">
              Find jobs, create trackable resumes and enrich your applications
            </p>
          </div>
          <div className="hidden md:block lg:w-1/2 md:mt-20 lg:mt-10 lg:flex lg:justify-center relative">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              <div className="absolute top-0 left-0 h-full w-full border border-dotted border-green-400 rounded-full circle-rotate">
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
                    <div>
                      <img
                        src={url}
                        alt={`Image ${index + 1}`}
                        className="w-20 h-20 rounded-full outline outline-8 outline-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-28 h-28 rounded-full flex items-center justify-center">
                <p className="text-xl font-bold text-green-800">PixelPulse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
