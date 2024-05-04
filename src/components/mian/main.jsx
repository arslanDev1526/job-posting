import React, { useState } from "react";
import Filters from "../sidebar/filters";
import Index from "../maindata";

const Main = () => {
  const [filteredData, setFilterData] = useState([]);

  const handleFilteredData = (filteredData) => {
    setFilterData(filteredData);
  };
  return (
    <>
      <div className="flex gap-4 px-12 mt-5">
        <Filters handleFilteredData={handleFilteredData} />
        <Index filteredData={filteredData} />
      </div>
    </>
  );
};

export default Main;
