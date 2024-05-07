import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../contexts/dataContext.jsx";

const Filters = ({ handleFilteredData }) => {
  const data = useContext(DataContext);
  const [filterTags, setFilterTags] = useState([]);
  const [departmentCount, setDepartmentCount] = useState({});

  useEffect(() => {
    const departmentCount = data.reduce((acc, value) => {
      acc[value.department] = (acc[value.department] || 0) + 1;
      return acc;
    }, {});
    setDepartmentCount(departmentCount);
  }, [data]);
 

  const handleFilter = (event) => {
    const tag = event.target.value;
    setFilterTags((prevFilterTags) => {
      if (event.target.checked) {
        return [...prevFilterTags, tag];
      } else {
        return prevFilterTags.filter((filterTag) => filterTag !== tag);
      }
    });
  };

  const handleReset = () => {
    setFilterTags([]);
   const checkboxes =  document.getElementsByClassName('filter_input');
    Array.from(checkboxes).forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (filterTags.length > 0) {
        return filterTags.some((filterTag) => {
          return item.department.includes(filterTag);
        });
      } else {
        return true;
      }
    });
    handleFilteredData(filteredData);
  }, [filterTags]);

  return (
    <>
      <div className="pt-5 lg_2:pt-7 lg_2:w-[30%] xl:w-1/5">
        <h1 className="">
          <span className="font-bold"> SHOW </span>RESULTS BY
        </h1>
        <div className="mt-5 shadow-lg rounded bg-white lg_2:mt-8">
          <div className="w-full gap-4 flex flex-col pl-5 py-5 lg_2:w-48">
            {Object.keys(departmentCount).map((department) => (
              <label
                key={department}
                className="flex gap-2"
                htmlFor={department}
              >
                <input
                  onChange={handleFilter}
                  className="accent-green-600 w-3 shadow-sm filter_input"
                  type="checkbox"
                  value={department}
                  id={department}
                />
                <span className="text-xs text-gray-400">
                  {department} ({departmentCount[department]})
                </span>
              </label>
            ))}
            <button
              onClick={handleReset}
              className="underline text-blue-500 text-xs text-start"
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
