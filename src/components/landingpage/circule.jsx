import React, { useState } from "react";
import "./landingpage.css";

const Circle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrls = [
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40d989d6cb18ee9c69_team-4.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40443bf03ec2af8e46_team-5.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40a4c62aae3e4fe14c_team-6.jpg",
    "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc4167bb8d2612498d5b_team-7.jpg",
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`h-96 w-96 border-2 border-yellow-900 rounded-full relative circle-rotate `}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >

{/* ${
          isHovered ? "" : "circle-rotate"
        } */}
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="absolute top-40 left-40 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotate(${index * 60}deg) translate(180px) rotate(${
                -index * 60
              }deg)`,
            }}
          >
            <img
              src={url} // Use provided image URL
              alt={`Image ${index + 1}`}
              className="w-16 h-16 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circle;
