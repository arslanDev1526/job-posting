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
      <div className="flex flex-col justify-center gap-4 pt-5 px-5 md_2:px-12 lg_2:flex-row">
        <Filters handleFilteredData={handleFilteredData} />
        <Index filteredData={filteredData} />
      </div>
    </>
  );
};

export default Main;
