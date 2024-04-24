import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom';
import supabase from "../config/client.jsx"

const Items = ({currentItems,searchedJob,filterTags }) => {
  const[isHovered, setIsHovered] = useState(false);
  
  const navigate = useNavigate();

  const hoverMe = () => {
    setIsHovered(true);
  };

  const unHoverMe = () => {
    setIsHovered(false);
  };
  const handleCardClick = async(id) => {
    try { 
      const { data, error} = await supabase
      .from('job_data')
      .select("*")
      .eq('id', id)
      .single();
      if(error) { 
        throw error;
      }
      console.log(data,"single data")
    navigate(`/detail/${id}`, {state: {item:data}})

    } catch (error) { 
      console.log(error, "error");
    }
  }
  console.log("searchedJob:", searchedJob);
  return (
    <>
  {currentItems
  .filter((inboxFilteredItem) => {
    if (filterTags.length > 0) {
      return filterTags.every((filterTag) => {
        console.log(inboxFilteredItem.department,"department data");
        console.log(filterTag,"filterTag");
        return inboxFilteredItem.department.includes(filterTag);
      });
    } else {
      return true;
    }
  })
  .filter((filteredItem) => {
    return filteredItem.post_name.toLowerCase().includes(searchedJob.toLowerCase());
  })
  .map((item) => (
    <div  
    onMouseEnter={hoverMe}
    onMouseLeave={unHoverMe} key={item.id} onClick={()=> handleCardClick(item.id)} className="bg-white shadow-md p-4 rounded-md max-w-sm w-80 flex flex-col items-center border border-red-600 cursor-pointer">
      <h2 className={`text-lg font-semibold text-center text-blue-600 ${isHovered ? 'text-green-300' : ''}`}>{item.post_name}</h2>
      <p className="text-gray-600 mt-5">{item.positions}</p>
      <span className={`h-[2.5px] w-20 bg-gray-300 mt-5 ${isHovered ? 'bg-green-300': ''}`}></span>
      <p className="text-gray-600 mt-5">{item.department}</p>
      <p className="text-gray-400 text-center">{item.address}</p>
    </div>
  ))}
  </>
  );
};

const PaginatedItems = ({ items, itemsPerPage, searchedJob ,filterTags }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Items currentItems={currentItems} searchedJob={searchedJob} filterTags={filterTags} />

      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex justify-between"
      />
    </>
  );
};

export default PaginatedItems;
