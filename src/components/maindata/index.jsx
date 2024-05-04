import React, { useState } from "react";
import CardListing from "./cardlisting";
import CardsChagerBtn from "./cardschagerbtn";
import SearchInput from "./searchinput";

const Index = ({ filteredData }) => {
  const [searchedData, setSearchedData] = useState([]);

  const handleSearchedData = (searchedData) => {
    setSearchedData(searchedData);
    // console.log(searchedData, "searchedData in the index");
  };

  return (
    <>
      <div>
        <div className="flex justify-between py-10 ">
          <div>
            <h1 className="text-2xl">
              <span className="font-bold">ALL </span>POSITIONS
            </h1>
          </div>
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
