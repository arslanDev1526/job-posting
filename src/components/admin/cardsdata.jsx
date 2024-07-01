import React, { useState } from "react";


const CardsData = () => {
  
  const [cardsData, setCardsData] = useState({
    post_name: "",
    positions: "",
    department: "",
    address: "",
    detail: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

        console.log("i am ok");

        setLoading(false);
        if (insertError) {
          toast.error("Error loading data!");
          return;
        }

        toast.success("Applied Successfully");

        setFormData({
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
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 flex-col items-center mt-5"
      >
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
              errors.positions ? "border-red-500 focus:border-red-600" : ""
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
        {/* <button
              type="submit"
              className="bg-[#3AD8B6] text-sm font-semibold px-8 py-2 rounded cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading" : "Save"}
            </button> */}
      </form>
    </>
  );
};

export default CardsData;
