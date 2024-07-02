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
          <div className="flex flex-col justify-center gap-4 pt-28 px-5 md_2:px-12 lg_2:flex-row">
            <Filters handleFilteredData={handleFilteredData} />
            <Index filteredData={filteredData} />
        </div>
      )}
    </>
  );
};

export default Main;
