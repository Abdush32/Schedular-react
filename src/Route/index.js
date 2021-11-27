import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../views/auth/HomePage";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
