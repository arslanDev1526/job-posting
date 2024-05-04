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
      {<ApplyButton item={item} />}
      {item.detail.map((info, index) => (
        <JobsDetail info={info} key={index} />
      ))}
      <h1> Related Jobs </h1>
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-start gap-4">
        {departmentData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Index;
