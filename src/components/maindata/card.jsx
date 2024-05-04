import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/client.jsx";

const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [showToolTip, setShowToolTip] = useState(false);

  const navigate = useNavigate();

  const handleTooltipToggle = () => {
    setShowToolTip(!showToolTip);
  };

  const hoverMe = (id) => {
    setIsHovered(id);
  };

  const unHoverMe = () => {
    setIsHovered(null);
  };

  const handleCardClick = async (id, department) => {
    try {
      const { data: detailData, error: detailError } = await supabase
        .from("job_data")
        .select("*")
        .eq("id", id)
        .single();
      if (detailError) {
        throw error;
      }

      const { data: departmentData, error: departmentError } = await supabase
        .from("job_data")
        .select("*")
        .eq("department", department)
        .not("id", "eq", id);
      if (departmentError) {
        throw detailError;
      }
      
      navigate(`/detail/${id}`, {
        state: { item: detailData, departmentData: departmentData },
      });
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <div
        key={item.id}
        onClick={() => handleCardClick(item.id, item.department)}
      >
        <div
          onMouseEnter={() => hoverMe(item.id)}
          onMouseLeave={unHoverMe}
          className="bg-white relative shadow-md p-5 rounded-md max-w-sm w-64 h-full flex flex-col items-center cursor-pointer gap-4"
        >
          <h2
            onMouseOver={handleTooltipToggle}
            onMouseOut={handleTooltipToggle}
            className={` text-lg font-semibold text-blue-600 text-center overflow-ellipsis whitespace-nowrap overflow-hidden w-40 ${
              isHovered === item.id ? "text-emerald-400" : ""
            }`}
          >
            {item.post_name}
          </h2>

          <span
            className={`absolute z-10 bg-gray-500 text-center top-16 text-xs text-white px-2 py-1 rounded ${
              showToolTip ? "visible" : "invisible"
            }`}
          >
            {" "}
            {item.post_name}{" "}
          </span>

          <p className="text-gray-600 text-xs">{item.positions}</p>
          <span
            className={`h-[2.5px] w-16 bg-gray-200 ${
              isHovered === item.id
                ? "bg-emerald-200 transform scale-x-125 transition-all duration-300 ease-in-out"
                : ""
            }`}
          ></span>
          <p className="text-gray-600 text-sm w-56 text-center">
            {item.department}
          </p>
          <p className="text-gray-400 text-sm text-center mt-1 w-56">
            {item.address}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
