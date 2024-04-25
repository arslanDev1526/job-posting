import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchedJob, setSearchedJob] = useState("");

  const handleSearchedJob = (e) => {
    setSearchedJob(e.target.value);
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
        className={`flex items-center px-3 py-2 border rounded ${
          isInputFocused ? "border-blue-400" : "border-gray-400"
        }`}
      >
        <input
          className="border-none outline-none"
          placeholder="Search"
          type="text"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
            value={searchedJob}
            onChange={handleSearchedJob}
            // still i have to manage the search functionality
        />
        <CiSearch />
      </div>
    </>
  );
};

export default SearchInput;
