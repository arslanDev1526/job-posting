import React, { useState, useContext, useEffect } from "react";
import supabase from "../../config/client.jsx";
import DataContext from "../../contexts/dataContext.jsx";
import AdminCard from "../admin/admincard.jsx";
import ReactPaginate from "react-paginate";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Loader from "../loader.jsx";

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

  const handleModalChange = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
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

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  return (
    <>
      {loading ? <Loader /> : null}
      <div className="flex justify-center flex-col items-center mt-10">
        <button
          onClick={handleModalChange}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Create
        </button>
      </div>

      {showModal && (
        <div class="fixed inset-0 flex items-center justify-center z-50">
          <div class="relative p-4 w-full max-w-4xl max-h-full">
            <div class="bg-white rounded-lg shadow">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Add your jobs data here
                </h3>
                <button
                  onClick={handleModalClose}
                  type="button"
                  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-4 md:p-5">
                <form className="flex gap-4 flex-col items-center mt-5">
                  <div class="relative w-5/6">
                    <input
                      type="text"
                      id="post_name"
                      class={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
                        errors.post_name
                          ? "border-red-500 focus:border-red-600"
                          : "focus:ring-0 focus:border-blue-600"
                      }`}
                      placeholder=" "
                      name="post_name"
                      onChange={hanldeInputChange}
                      value={cardsData.post_name}
                    />
                    <label
                      for="post_name"
                      class={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 bg-gray-100 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
                        errors.fullName
                          ? "peer-focus:px-2 peer-focus:text-red-600"
                          : "peer-focus:px-2 peer-focus:text-blue-600"
                      }`}
                    >
                      Post Name
                    </label>
                  </div>
                  <div class="relative w-5/6">
                    <input
                      type="text"
                      id="positions"
                      class={`${
                        errors.positions
                          ? "border-red-500 focus:border-red-600"
                          : ""
                      } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
                      placeholder=" "
                      name="positions"
                      value={cardsData.positions}
                      onChange={hanldeInputChange}
                    />
                    <label
                      for="positions"
                      class={`${
                        errors.positions
                          ? "peer-focus:px-2 peer-focus:text-red-600"
                          : "peer-focus:px-2 peer-focus:text-blue-600"
                      } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
                    >
                      Position
                    </label>
                  </div>
                  <div class="relative w-5/6">
                    <input
                      type="text"
                      id="department"
                      class={`${
                        errors.department
                          ? "border-red-500 focus:border-red-600"
                          : "focus:ring-0"
                      } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
                      placeholder=" "
                      name="department"
                      value={cardsData.department}
                      onChange={hanldeInputChange}
                    />
                    <label
                      for="department"
                      class={`${
                        errors.department
                          ? "peer-focus:px-2 peer-focus:text-red-600"
                          : "peer-focus:px-2 peer-focus:text-blue-600"
                      } bg-gray-100 absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                      Department
                    </label>
                  </div>
                  <div class="relative w-5/6">
                    <input
                      type="text"
                      id="address"
                      class={`${
                        errors.address
                          ? "border-red-500 focus:border-red-600"
                          : "focus:ring-0 focus:border-blue-600"
                      } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
                      placeholder=" "
                      name="address"
                      value={cardsData.address}
                      onChange={hanldeInputChange}
                    />
                    <label
                      for="address"
                      class={`${
                        errors.address
                          ? "peer-focus:px-2 peer-focus:text-red-600"
                          : "peer-focus:px-2 peer-focus:text-blue-600"
                      } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                      Address
                    </label>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-[#3AD8B6] text-sm font-semibold px-8 py-2 rounded cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Save"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-between min-h-[500px]">
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
