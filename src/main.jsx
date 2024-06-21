import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.css";
import AuthProvider from "./contexts/authprovider.jsx";
import { Router } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
