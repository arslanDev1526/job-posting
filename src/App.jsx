import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filter from "./components/filter"
import CardsData from "./components/cardsData"
import JobApply from "./components/jobApply";
import FileUpload from "./components/fileUpload";
import { DataProvider } from "./contexts/dataContext";
import DetailJobPage from "./components/detailJobPage";
import Navbar from "./components/navbar/navbar.jsx";

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
    <Router> 
    <DataProvider>
  <div> 
  <Navbar/>

    <Routes> 

      <Route path="/" element={<CardsData filterTags={filterTags} />} />
      <Route path="/detail/:id" element={<DetailJobPage/>} />
    {/* <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Filter filterTags={filterTags} filterHandler={filterHandler}  />
        <CardsData filterTags={filterTags} />

        <Route path="/" exact compon />
  
        </div>
  
      </div>  */}
    </Routes>
 
  </div>
 
   </DataProvider>
    </Router>

 
    {/* <JobApply/> */}

   
    </>
  )
}

export default App
