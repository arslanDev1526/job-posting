import React, { useState } from "react";
import Filter from "./components/filter"
import CardsData from "./components/cardsData"
import JobApply from "./components/jobApply";

function App() {
  
  const [filterTags, setFilterTags] = useState([]);
  
  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  return (
    <>
{/* 
   <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Filter filterTags={filterTags} filterHandler={filterHandler}  />
      <CardsData filterTags={filterTags} />

      </div>

    </div> */}
    <JobApply/>
   
    </>
  )
}

export default App
