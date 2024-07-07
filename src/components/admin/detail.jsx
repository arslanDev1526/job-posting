import React, { useState, useContext, useEffect } from "react";
import supabase from "../../config/client.jsx";
import DataContext from "../../contexts/dataContext.jsx";
import AdminCard from "../admin/admincard.jsx";
import ReactPaginate from "react-paginate";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Loader from "../loader.jsx";
import './admin.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Detail = () => {
  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [cardsData, setCardsData] = useState({
    post_name: "",
    positions: "",
    department: "",
    address: "",
    detail: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { cardsData: adminCardsData } = useContext(DataContext);

  const navigate = useNavigate();

  const handlenavigation = () => {
    navigate('/create_job');
  };



  const hanldeInputChange = (e) => {
    const { name, value } = e.target;
    setCardsData({
      ...cardsData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("i am clicked");

    let hasError = false;
    const newErrors = {};
    for (const input in cardsData) {
      if (!cardsData[input]) {
        hasError = true;
        newErrors[input] = "This field is required";
      }
    }

    if (cardsData.post_name.length === 0) {
      hasError = true;
      newErrors["post_name"] = "At least one skill is required";
    }

    if (cardsData.positions.length === 0) {
      hasError = true;
      newErrors["positions"] = "At least one gender is required";
    }

    if (cardsData.department.length === 0) {
      hasError = true;
      newErrors["department"] = "At least one source is required";
    }

    if (cardsData.address.length === 0) {
      hasError = true;
      newErrors["address"] = "At least one source is required";
    }

    setErrors(newErrors);

    if (!hasError) {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("job_data")
          .upsert(cardsData);

        console.log("i am ok");

        setLoading(false);
        setShowModal(false);
        if (error) {
          console.error("Error posting data", error);
          //   toast.error("Error loading data!");
          return;
        }

        console.log("data loded successfully", data);
        // toast.success("Applied Successfully");

        setCardsData({
          post_name: "",
          positions: "",
          department: "",
          address: "",
          detail: [],
        });
      } catch (error) {
        //add toast here
      }
    }
  };


  const itemsPerPage = 9;
  const pageVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(adminCardsData.length / itemsPerPage);

  const displayData = adminCardsData.slice(
    pageVisited,
    pageVisited + itemsPerPage
  );

  const handlePageChange = ({ selected }) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setPageNumber(selected);
  };



  return (
    <>
      {loading ? <Loader /> : null}
      <div className={`flex justify-center flex-col items-center pt-32 border border-red-400 ${showModal ? "blur-background" : " "} `}>
        <button
          onClick={handlenavigation}
          className="hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-8 py-2.5 rounded-md text-md font-semibold"
        >
          Create Job
        </button>
      </div>


      <div className={`flex flex-col justify-between min-h-[500px] ${showModal ? "blur-background" : " "}`}>
        <div className="flex flex-col md_2:flex-row md_2:flex-wrap lg_2:flex-row lg_2:flex-wrap mt-4 mb-4 gap-5">
          {displayData.map((item, index) => (
            <AdminCard item={item} key={index} />
          ))}
        </div>
        <ReactPaginate
          className="flex justify-center gap-5 items-center py-2 my-10"
          breakLabel="..."
          nextLabel={<GrNext />}
          onPageChange={handlePageChange}
          pageCount={pageCount}
          previousLabel={<GrPrevious />}
          renderOnZeroPageCount={null}
          activeClassName="border border-gray-300 px-3 rounded-sm text-green-500 text-lg font-semibold"
          disabledClassName="text-gray-400"
          pageClassName="hover:text-green-500"
        />
      </div>

    </>
  );
};

export default Detail;
