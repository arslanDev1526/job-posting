import React, { useContext } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import Card from "./card";

const CardListing = ({searchedData, filteredData}) => {
  const data = useContext(DataContext);
  let displayData = [];

  if (searchedData.length > 0) {
    displayData = searchedData;
  } else if (filteredData.length > 0) {
    displayData = filteredData;
  } else {
    displayData = data;
  }


  return (
    <>
      <div className="flex flex-col md_2:flex-row md_2:flex-wrap mt-4 mb-4 gap-5 justify-between">
        {displayData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardListing;
