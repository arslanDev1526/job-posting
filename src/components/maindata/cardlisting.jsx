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
  console.log(isLoading,"Loading in cardListing...");

  console.log(cardsData, "data in card list")
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
  const paginatedData = displayData.slice(
    pageVisted,
    pageVisted + itemsPerPage
  );
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
          {paginatedData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
        <ReactPaginate
        className="flex justify-center gap-5 items-center font-semibold text-lg py-2 my-10 "
          breakLabel="..."
          nextLabel={<GrNext/>}
          onPageChange={handlePageChange}
          pageCount={pageCount}
          previousLabel={<GrPrevious/>}
          renderOnZeroPageCount={null}
          activeClassName="border border-gray-300 px-3 rounded-sm"
          disabledClassName="text-gray-400 cursor-not-allowed"
        />
      </div>  }
     
    </>
  );
};

export default CardListing;
