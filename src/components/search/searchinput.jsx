import { CiSearch } from "react-icons/ci";
import DataContext from "../../contexts/dataContext.jsx";
import React, { useContext,useState } from "react";


const SearchInput = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchedJob, setSearchedJob] = useState("");
  const data = useContext(DataContext);
  console.log(data.post_name,"data on serachpage");


  const handleSearch = () => { 
    const filteredData = data.filter((filteredItem) => {
    console.log(filteredItem,"filteredItem")
      return filteredItem.post_name
        .toLowerCase()
        .includes(searchedJob.toLowerCase());
    })
    console.log("i am working ok ok",filteredData)
  }

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
          className="border-none outline-none bg-gray-100"
          placeholder="Search"
          type="text"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={searchedJob}
          onChange={handleSearchedJob}
            // still i have to manage the search functionality
        />

        <button onClick={handleSearch}> 
        <CiSearch />
          
           </button>
      </div>
    </>
  );
};

export default SearchInput;
