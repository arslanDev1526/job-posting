import React, { useState, useContext } from "react";
import DataContext from "../../contexts/dataContext.jsx";
import AdminCard from "../admin/admincard.jsx";
import ReactPaginate from "react-paginate";
import { GrNext, GrPrevious } from "react-icons/gr";
import Loader from "../loader.jsx";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authprovider.jsx";

const Detail = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const { cardsData: adminCardsData } = useContext(DataContext);
  const { id } = useAuth();
  console.log(adminCardsData,"adminCardsData")

  const filterHRSpecificData = () => {
    return adminCardsData.filter((card) => card.hr_id === id);
  };

  const HrData = filterHRSpecificData();
  console.log(HrData, "hr data");

  const navigate = useNavigate();

  const handlenavigation = () => {
    navigate("/create_job");
  };

  const itemsPerPage = 9;
  const pageVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(HrData.length / itemsPerPage);

  const displayData = HrData.slice(pageVisited, pageVisited + itemsPerPage);

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
      {loading && <Loader />}

      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-10">
        <div className="flex justify-center flex-col items-center pt-32">
          <button
            onClick={handlenavigation}
            className="hover:bg-green-200 hover:text-green-900 bg-green-900 text-white px-8 py-2.5 rounded-md text-md font-semibold"
          >
            Create Job
          </button>
        </div>
        {displayData.length > 0 ? (
          <div className="flex flex-col justify-center items-center min-h-[500px]">
            <div className="flex flex-col justify-center md_2:flex-row md_2:flex-wrap lg_2:flex-row lg_2:flex-wrap mt-10 mb-4 gap-5 w-full">
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
        ) : (
          <div className="flex justify-center items-center mt-40">
            <h1 className="text-green-500 text-4xl font-bold">
              No Job Created
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
