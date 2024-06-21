import React from 'react'

const LandingCard = () => {
  return (
    <div
        key={item.id}
        onClick={() => handleCardClick(item.id, item.department)}
        className="w-full max-w-[34rem] md_2:w-[48%] xl:w-[31%]"
      >
        {isLoading && (
          <div className="">
            <Loader />
          </div>
        )}
        <div
          
          className="bg-white relative shadow-md p-5 rounded-md h-full flex flex-col items-center cursor-pointer gap-4"
        >
          <h2
         
            className={` text-sm font-semibold text-center
          md_2:overflow-ellipsis md_2:whitespace-nowrap md_2:overflow-hidden md_2:w-40
            text-green-400`}
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
            <p className="text-gray-600 text-xs text-center">
              {item.department}
            </p>
            <p className="text-gray-400 text-xs text-center mt-2">
              {item.address}
            </p>
          </div>
        </div>
      </div>
  )
}

export default LandingCard