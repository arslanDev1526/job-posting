import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/dataContext";
import DetailJobPage from "./components/details/detailJobPage.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./components/mian/main.jsx";
import JobApply from "./components/apply/jobApply.jsx";

function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/detail/:id" element={<DetailJobPage />} />
              <Route path="/job_apply" element={<JobApply />} />

            </Routes>
          </div>
        </DataProvider>
      </Router>

      {/* <JobApply/> */}
    </>
  );
}

export default App;
