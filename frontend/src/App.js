import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";
import QRScan from "./components/scanner";
import Detail from "./components/Detail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Scan" element={<QRScan />} />
          <Route path="/Scan/:ID" element={<Detail />} />

         
        </Routes>
      </BrowserRouter>
  );
}


export default App;
