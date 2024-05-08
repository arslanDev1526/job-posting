import React from "react";
import { useLocation } from "react-router-dom";

import Card from "../maindata/card";
import HeaderImg from "./headerimg";
import JobsDetail from "./jobsdetail";
import ApplyButton from "./appltbutton";

const Index = () => {
  const location = useLocation();
  const { item, departmentData } = location.state || {};

  return (
    <>
      <HeaderImg />
      <div className="px-8 md_2:px-10"> 
      {<ApplyButton item={item} />}
      {item.detail.map((info, index) => (
        <JobsDetail info={info} key={index} />
      ))}
      <h1 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start mt-8"> Related Jobs </h1>
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-center gap-4 mt-5 mb-5">
        {departmentData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
      </div>

    </>
  );
};

export default Index;
