import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import PaginatedItems from "./paginatedItems";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://blnncmgalhqgaetzdtms.supabase.co'
const supabaseKey =" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbm5jbWdhbGhxZ2FldHpkdG1zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjQwNDIxOSwiZXhwIjoyMDI3OTgwMjE5fQ.OwcosZCrJxCYQaqE6L9eGdXsN4oZGK4xQYUE3-ragBA"
const supabase = createClient(supabaseUrl, supabaseKey)



// const data = [
//   {
//     post: "Assistant Project Manager",
//     position: "1 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "2 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "3 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "4 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "5 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "6 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "7 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "8 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "9 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "10 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "11 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "12 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "13 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "14 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "15 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "16 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "17 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "18 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "19 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "20 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "21 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "22 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "23 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "24 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "25 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "26 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
//   {
//     post: "Assistant Project Manager",
//     position: "27 Position(s)",
//     department: "Software Development Department",
//     address: "2nd Floor, 21-K Commercila, Model Town, Lahore",
//   },
// ];

const CardsData = ({filterTags}) => {
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const[searchedJob, setSearchedJob] = useState("");

  const handleSearchedJob = (e) => { 

setSearchedJob(e.target.value);
  }


  useEffect(() => {
    async function fetchTodos() {
      // Fetch todos from Supabase database
      const { data, error } = await supabase.from("job_data").select();
      console.log(data);
      if (error) {
        console.error('Error fetching todos:', error.message);
      } else {
        setData(data);
      }
    }

    fetchTodos();
  }, []);

  const handleDropdownChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setVisibleCards(selectedValue);

    const newCurrentPage = Math.floor(
      (currentPage * visibleCards) / selectedValue
    );
    setCurrentPage(newCurrentPage);
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1>
            <span>ALL</span> POSITIONS
          </h1>
          <span>6 Jobs</span>
          <button type="button">Rectangle</button>
          <button type="button">Long</button>
          <div className="flex items-center px-2 py-1 border border-gray-300">
            <input
              className="border-none outline-none"
              placeholder="Search"
              type="text"
              value={searchedJob}
              onChange={handleSearchedJob}
            />
            <CiSearch />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PaginatedItems
            items={data}
            itemsPerPage={visibleCards}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchedJob = {searchedJob}
            filterTags={filterTags}
          />
        </div>
      </div>

      {/* <select
          onChange={handleDropdownChange}
          className="border border-gray-300 p-1 rounded"
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="27">27</option>
        </select> */}
    </>
  );
};

export default CardsData;
