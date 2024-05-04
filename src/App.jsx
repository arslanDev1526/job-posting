import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/dataContext";
import Index from "./components/details/index.jsx";
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
              <Route path="/detail/:id" element={<Index />} />
              <Route path="/job_apply" element={<JobApply />} />
            </Routes>
          </div>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
