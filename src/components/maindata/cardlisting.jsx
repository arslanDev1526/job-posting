import React, { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import Card from "./card";

const CardListing = ({searchedData, filteredData}) => {
  const data = useContext(DataContext);
// console.log(searchedData,"searchedData in cardListing")
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
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-start gap-4">
        {displayData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardListing;
