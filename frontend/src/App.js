import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/signin";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Signin" element={<Signin />} />
         
        </Routes>
      </BrowserRouter>
  );
}


export default App;
