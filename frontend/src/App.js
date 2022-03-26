import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Signin from "./components/signin";
import Signup from "./components/signup";
import QRScan from "./components/scanner";
import Detail from "./components/Detail";
import SaveQR from "./components/saveQR";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Scan" element={<QRScan />} />
          <Route path="/Scan/:ID" element={<Detail />} />
          <Route path="/SaveQR/:ID" element={<SaveQR />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
