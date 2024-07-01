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
      <div className="px-8 md_2:px-10">
        {<ApplyButton item={item} />}
        {item.detail.map((info, index) => (
          <JobsDetail info={info} key={index} />
        ))}
        <h1 className="mb-3 text-lg font-bold lg:text-xl md_2:text-start mt-8">
          {" "}
          Related Jobs{" "}
        </h1>
        <div className="flex flex-wrap gap-4 mt-5 mb-5">
          {departmentData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
