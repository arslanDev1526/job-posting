import React, { useState, useEffect, useContext  } from "react";
import { CiSearch } from "react-icons/ci";
import PaginatedItems from "./paginatedItems";
import DataContext from "../contexts/dataContext";

const CardsData = ({filterTags}) => {
const data = useContext(DataContext);
  const [visibleCards, setVisibleCards] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const[searchedJob, setSearchedJob] = useState("");

  const handleSearchedJob = (e) => { 

setSearchedJob(e.target.value);
  }

  const handleDropdownChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setVisibleCards(selectedValue);

    const newCurrentPage = Math.floor(
      (currentPage * visibleCards) / selectedValue
    );
    setCurrentPage(newCurrentPage);
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1>
            <span>ALL</span> POSITIONS
          </h1>
          <span>6 Jobs</span>
          <button type="button">Rectangle</button>
          <button type="button">Long</button>
          <div className="flex items-center px-2 py-1 border border-gray-300">
            <input
              className="border-none outline-none"
              placeholder="Search"
              type="text"
              value={searchedJob}
              onChange={handleSearchedJob}
            />
            <CiSearch />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PaginatedItems
            items={data}
            itemsPerPage={visibleCards}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchedJob = {searchedJob}
            filterTags={filterTags}
          />
        </div>
      </div>

      {/* <select
          onChange={handleDropdownChange}
          className="border border-gray-300 p-1 rounded"
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="27">27</option>
        </select> */}
    </>
  );
};

export default CardsData;
