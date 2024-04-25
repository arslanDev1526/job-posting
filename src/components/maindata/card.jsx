import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import supabase from "../../config/client.jsx";


const Card = ({item}) => {
    const [isHovered, setIsHovered] = useState(null);

    // const navigate = useNavigate();
  
    const hoverMe = (id) => {
      setIsHovered(id);
    };
  
    const unHoverMe = () => {
      setIsHovered(null);
    };

    const handleCardClick = async (id) => {
        try {
          const { data, error } = await supabase
            .from("job_data")
            .select("*")
            .eq("id", id)
            .single();
          if (error) {
            throw error;
          }
          console.log(data, "single data");
          navigate(`/detail/${id}`, { state: { item: data } });
        } catch (error) {
          console.log(error, "error");
        }
      };
  return (
   <> 
      <div key={item.id} onClick={() => handleCardClick(item.id)}>
            <div
              onMouseEnter={()=>hoverMe(item.id)}
              onMouseLeave={unHoverMe}
              className="bg-white shadow-md p-5 rounded-md max-w-sm w-64 h-full flex flex-col items-center cursor-pointer gap-4"
            >
              <h2
                className={`text-lg font-semibold text-blue-600 overflow-ellipsis  whitespace-nowrap overflow-hidden ${
                  isHovered === item.id ? "text-emerald-400" : ""
                }`}
              >
                {item.post_name}
              </h2>
              <p className="text-gray-600 text-xs">{item.positions}</p>
              <span
                className={`h-[2.5px] w-16 bg-gray-200 ${
                  isHovered === item.id ? "bg-emerald-200 transform scale-x-125 transition-all duration-300 ease-in-out" : ""
                }`}
              ></span>
              <p className="text-gray-600 text-sm w-56 text-center">{item.department}</p>
              <p className="text-gray-400 text-sm text-center mt-1 w-56">{item.address}</p>
            </div>
          </div>
   </>
  )
}

export default Card