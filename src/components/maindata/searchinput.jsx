import { CiSearch } from "react-icons/ci";
import DataContext from "../../contexts/dataContext.jsx";
import React, { useContext, useState } from "react";

const SearchInput = ({ handleSearchedData, filteredData }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchedJob, setSearchedJob] = useState("");
  const data = useContext(DataContext);
  // console.log(filteredData, "filteredData in the serachfolder");


  const handleSearch = () => {
    let searchData;
    if (filteredData.length > 0) {
      searchData = filteredData.filter((item) =>
        item.post_name.toLowerCase().includes(searchedJob.toLowerCase())
      );
      handleSearchedData(searchData);
      // console.log(searchData, "searchData of filtered data");
    } else {
      searchData = data.filter((item) =>
        item.post_name.toLowerCase().includes(searchedJob.toLowerCase())
      );
      handleSearchedData(searchData);
    // console.log(searchData, "searchData for data");

    }
  };

  const handleEnterHit = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchedJob = (e) => {
    const value = e.target.value;
    setSearchedJob(value);
    if (value === "") {
      handleSearchedData([]);
    }
  };

  const handleOnFocus = () => {
    setIsInputFocused(true);
  };

  const handleOnBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <div
        className={`flex justify-between mt-5 md_2:mt-0 lg_2:mt-0 w-full px-3 border rounded ${
          isInputFocused ? "border-blue-400" : "border-gray-400"
        }`}
      >
        <input
          className="border-none outline-none bg-gray-100"
          placeholder="Search"
          type="text"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={searchedJob}
          onChange={handleSearchedJob}
          onKeyDown={handleEnterHit}
        />

        <button onClick={handleSearch}>
          <CiSearch />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
