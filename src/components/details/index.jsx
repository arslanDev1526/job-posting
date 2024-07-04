import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Card from "../maindata/card";
import HeaderImg from "./headerimg";
import JobsDetail from "./jobsdetail";
import ApplyButton from "./appltbutton";
import supabase from "../../config/client";
import Loader from "../loader";

const Index = () => {
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [departmentData, setDepartmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const department = searchParams.get("department");
      try {
        setIsLoading(true);
        const { data: detailData, error: detailError } = await supabase
          .from("job_data")
          .select("*")
          .eq("id", id)
          .single();
        if (detailError) {
          throw error;
        }
        setItem(detailData);
        const { data: departmentData, error: departmentError } = await supabase
          .from("job_data")
          .select("*")
          .eq("department", department)
          .not("id", "eq", id);
        if (departmentError) {
          throw detailError;
        }
        setDepartmentData(departmentData);
        setIsLoading(false);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id, location.search]);

  if (!item) {
    return <Loader />;
  }

  return (
    <>
      <HeaderImg />
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10">
        {<ApplyButton item={item} />}
        {item.detail.map((info, index) => (
          <JobsDetail info={info} key={index} />
        ))}
        <h1 className="mb-3 text-lg md:text-xl font-bold text-green-700 md_2:text-start mt-8">
          {" "}
          Related Jobs{" "}
        </h1>
        {departmentData.length > 0 ?  <div className="flex flex-wrap gap-4 mt-5 mb-5">
          {departmentData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div> : <h1 className="p-20 text-lg md:text-5xl font-semibold  text-green-700 text-center"> No related Job </h1> }
       
      </div>
    </>
  );
};

export default Index;
