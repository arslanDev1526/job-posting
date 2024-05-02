import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filter from "./components/filter";
import CardsData from "./components/cardsData";
import JobApply from "./components/jobApply";
import FileUpload from "./components/fileUpload";
import { DataProvider } from "./contexts/dataContext";
import DetailJobPage from "./components/detailJobPage";
import Navbar from "./components/navbar/index.jsx";
import Index from "./components/maindata/index.jsx";
import Filters from "./components/sidebar/filters.jsx";

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
      <DataProvider>
        <div>
          <Navbar />
          <div className="flex gap-4 px-12 mt-5">
            <Filters />
            <Index />
          </div>

          {/* <CardsData filterTags={filterTags} /> */}
          {/* <DetailJobPage /> */}
          {/* <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Filter filterTags={filterTags} filterHandler={filterHandler} />
            </div>
          </div> */}
        </div>
      </DataProvider>

      {/* <JobApply/> */}
    </>
  );
}

export default App;
