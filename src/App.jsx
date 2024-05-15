import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import { DataProvider } from "./contexts/dataContext";
import Index from "./components/details/index.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./components/mian/main.jsx";
import JobApply from "./components/apply/jobApply.jsx";
import Register from "./components/auth/register.jsx";
import Login from "./components/auth/login.jsx";
import AuthRoute from "./components/auth/authroute.jsx";

function App() {
  return (
    <>
      <Router>
        <DataProvider>
            <Routes>
              <Route element={<AuthRoute />}>
                <Route element={<Navbar />}>
                  <Route path="/main" element={<Main />} />
                  <Route path="/detail/:id" element={<Index />} />
                  <Route path="/job_apply" element={<JobApply />} />
                </Route>
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/register" />} />
            </Routes>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
