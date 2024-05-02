import React, { useContext } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import Card from "./card";

const CardListing = () => {
  const data = useContext(DataContext);

  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-start gap-4">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardListing;
