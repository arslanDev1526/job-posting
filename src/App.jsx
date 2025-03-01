import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { DataProvider } from "./contexts/dataContext";
import Index from "./components/details/index.jsx";
import Navbar from "./components/landingpage/navbar.jsx";
import Main from "./components/mian/main.jsx";
import JobApply from "./components/apply/jobApply.jsx";
import Register from "./components/auth/register.jsx";
import Login from "./components/auth/login.jsx";
import AuthRoute from "./components/auth/authroute.jsx";
import AdminIndex from "./components/admin/index.jsx";
import Landing from "./components/landingpage/landing.jsx";
import CreateJob from "./components/admin/multistepform/createjob.jsx";
import AdminNav from "./components/admin/adminnav.jsx";
import Applications from "./components/admin/applications/applications.jsx";
import Details from "./components/admin/applications/details.jsx";

function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <Routes>
            <Route element={<AuthRoute role="HR" />}>
              <Route element={<AdminNav />}>
                <Route path="/myDasboard" element={<AdminIndex />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/applications_detail/:id" element={<Details />} />
                <Route path="/create_job" element={<CreateJob />} />
              </Route>
            </Route>

            <Route element={<AuthRoute role="applicant" />}>
              <Route element={<Navbar />}>
                <Route path="/jobs" element={<Main />} />
                <Route path="/detail/:id" element={<Index />} />
                <Route path="/job_apply/:id" element={<JobApply />} />
              </Route>
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/jobs" />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
