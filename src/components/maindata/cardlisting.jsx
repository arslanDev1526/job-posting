import React, { useContext } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import Card from "./card";

const CardListing = () => {
  const data = useContext(DataContext);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardListing;
