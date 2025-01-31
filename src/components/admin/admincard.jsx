import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/client.jsx";
// import Loader from "../loader.jsx";
import DataContext from "../../contexts/dataContext.jsx";
import Loader from "../loader.jsx";

const AdminCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [showToolTip, setShowToolTip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {handleDelete} = useContext(DataContext);
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

  const handleCardUpdate = async (id) => { 
    console.log("i am clicked")
    navigate(`/create_job?id=${id}`);
  }

  const handleCardDelete = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("job_data")
        .delete()
        .eq("id", item.id);

      if (error) {
        console.error("Error deleting data", error);
        return;
      }
      setIsLoading(false);

      handleDelete(item.id);
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  return (
    <div className="w-full max-w-[30rem] md_2:w-[48%] xl:w-[32%] adminCard">
      {isLoading && (
        <div className="">
          <Loader />
        </div>
      )}
      <div
        key={item.id}
        onMouseEnter={() => hoverMe(item.id)}
        onMouseLeave={unHoverMe}
        className="bg-white relative shadow-md p-5 rounded-md h-full flex flex-col items-center cursor-pointer gap-4"
      >
        <h2
          onMouseOver={handleTooltipToggle}
          onMouseOut={handleTooltipToggle}
          className={` text-sm font-semibold text-blue-600 text-center md_2:overflow-ellipsis md_2:whitespace-nowrap md_2:overflow-hidden md_2:w-40
        ${isHovered === item.id ? "text-green-400" : ""}`}
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
              ? "bg-green-400 transform scale-x-125 transition-all duration-300 ease-in-out"
              : ""
          }`}
        ></span>
        <div className="w-full">
          <p className="text-gray-600 text-xs text-center">{item.department}</p>
          <p className="text-gray-400 text-xs text-center mt-2">
            {item.address}
          </p>
        </div>
        <div className="flex justify-between w-2/3 mt-5">
          <button
          onClick={() => handleCardUpdate(item.id)}
          className="hover:bg-green-200 hover:text-green-900 bg-green-700 text-white px-5 py-2.5 rounded-md text-md font-semibold">Edit</button>
          <button
            onClick={handleCardDelete}
            className="hover:bg-green-200 hover:text-green-900 bg-green-700 text-white px-5 py-2.5 rounded-md text-md font-semibold"
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
