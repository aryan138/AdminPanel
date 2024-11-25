import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Home/Layout";
import Chemist from "./components/chemist/chemist";
import Doctor from "./components/doctor/Doctor";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/chemist" element={<Chemist/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
