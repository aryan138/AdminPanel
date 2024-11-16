import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Home/Layout";
import Chemist from "./components/chemist/chemist";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/chemist" element={<Chemist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
