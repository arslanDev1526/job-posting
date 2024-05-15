import React, { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import Card from "./card";
import ReactPaginate from "react-paginate";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Loader from "../loader.jsx";

const CardListing = ({ searchedData, filteredData }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const {cardsData, isLoading} = useContext(DataContext);
  let displayData = [];
  if (searchedData.length > 0) {
    displayData = searchedData;
  } else if (filteredData.length > 0) {
    displayData = filteredData;
  } else {
    displayData = cardsData;
  }

  const itemsPerPage = 9;
  const pageVisted = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(displayData.length / itemsPerPage);
  let paginatedData = [];
  if (displayData.length > itemsPerPage){
    paginatedData = displayData.slice(
      pageVisted,
      pageVisted + itemsPerPage
    );
  } else {
    paginatedData = displayData;
  }
  displayData = paginatedData;
  const handlePageChange = ({ selected }) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setPageNumber(selected);
  };
  return (
    <> 
    { isLoading ? <Loader/> : 
     <div className="flex flex-col justify-between min-h-[500px]">
        <div className="flex flex-col md_2:flex-row md_2:flex-wrap lg_2:flex-row lg_2:flex-wrap mt-4 mb-4 gap-5">
          {displayData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
        <ReactPaginate
        className="flex justify-center gap-5 items-center py-2 my-10"
          breakLabel="..."
          nextLabel={<GrNext/>}
          onPageChange={handlePageChange}
          pageCount={pageCount}
          previousLabel={<GrPrevious/>}
          renderOnZeroPageCount={null}
          activeClassName="border border-gray-300 px-3 rounded-sm text-green-500 text-lg font-semibold"
          disabledClassName="text-gray-400"
          pageClassName="hover:text-green-500"
        />
      </div>  }
     
    </>
  );
};

export default CardListing;