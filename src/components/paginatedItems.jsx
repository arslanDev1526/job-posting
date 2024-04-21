import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom';
import supabase from "../config/client.jsx"

const Items = ({currentItems,searchedJob,filterTags }) => {
  
  const navigate = useNavigate();

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
    <div key={item.id} onClick={()=> handleCardClick(item.id)} className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-bold mb-2">{item.post_name}</h2>
      <p className="text-gray-600 mb-2">{item.positions}</p>
      <p className="text-gray-600 mb-2">{item.department}</p>
      <p className="text-gray-600">{item.address}</p>
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
