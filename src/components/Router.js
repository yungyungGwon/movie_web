import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Navigation from "./Navigation";
import Search from "../routes/Search";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
