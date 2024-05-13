import React, {useState } from "react";

import CardListing from "./cardlisting";
import CardsChagerBtn from "./cardschagerbtn";
import SearchInput from "./searchinput";


const Index = ({ filteredData }) => {
  const [searchedData, setSearchedData] = useState([]);

  const handleSearchedData = (searchedData) => {
    setSearchedData(searchedData);
  };

  return (
    <>
      <div className="lg_2:w-[70%]">
        <div className="flex justify-between flex-col md_2:flex-row md_2:items-center lg_2:flex-row lg_2:items-center py-5 lg_2:pb-1">
            <h1 className="">
              <span className="font-bold">ALL </span>POSITIONS
            </h1>
          <div className="flex gap-4">
            <CardsChagerBtn />
            <SearchInput filteredData={filteredData} handleSearchedData={handleSearchedData} />
          </div>
        </div>
        <CardListing searchedData={searchedData} filteredData={filteredData} />
      </div>
   
    </>
  );
};

export default Index;
