import { CiSearch } from "react-icons/ci";
import DataContext from "../../contexts/dataContext.jsx";
import React, { useContext, useState, useCallback, useRef } from "react";

const SearchInput = ({ handleSearchedData, filteredData }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchedJob, setSearchedJob] = useState("");
  const data = useContext(DataContext);

  const debounceTimeoutRef = useRef(null);

  const debounce = (func, wait) => {
    return (...args) => {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = setTimeout(() => func(...args), wait);
    };
  };

  const handleSearch = (value) => {
    let searchData;
    if (filteredData.length > 0) {
      searchData = filteredData.filter((item) =>
        item.post_name.toLowerCase().includes(value.toLowerCase())
      );
      handleSearchedData(searchData);
    } else {
      searchData = data.filter((item) =>
        item.post_name.toLowerCase().includes(value.toLowerCase())
      );
      handleSearchedData(searchData);
    }
  };

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), [
    filteredData,
    data,
    handleSearchedData,
  ]);

  const handleEnterHit = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchedJob);
    }
  };

  const handleSearchedJob = (e) => {
    const value = e.target.value;
    setSearchedJob(value);
    debouncedHandleSearch(value);
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
          onChange={(e) => {
            handleSearchedJob(e);
            debouncedHandleSearch(e.target.value);
          }}
          onKeyDown={handleEnterHit}
        />

        <button onClick={() => handleSearch(searchedJob)}>
          <CiSearch />
        </button>
      </div>
    </>
  );
};

export default SearchInput;