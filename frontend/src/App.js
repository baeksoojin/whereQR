import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
         
        </Routes>
      </BrowserRouter>
  );
}


export default App;
