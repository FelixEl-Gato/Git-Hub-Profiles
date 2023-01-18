import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./routes/Users";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
