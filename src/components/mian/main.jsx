import Filters from "../sidebar/filters";
import Index from "../maindata";
import React, { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import Loader from "../loader.jsx";

const Main = () => {
  const [filteredData, setFilterData] = useState([]);
  const { isLoading } = useContext(DataContext);

  const handleFilteredData = (filteredData) => {
    setFilterData(filteredData);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10">
          <div className="flex flex-col justify-center gap-4 pt-20 md:pt-28 lg_2:flex-row">
            <Filters handleFilteredData={handleFilteredData} />
            <Index filteredData={filteredData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
