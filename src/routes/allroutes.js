import React from "react";
import { Routes, Route } from "react-router-dom";
import Movielist from "../pages/Movielist";
import MoveiDetails from "../pages/MoveiDetails"
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="" element={<Movielist apipath="movie/now_playing" title="movieListcinemate"/> }/>
      <Route path="movie/:id" element={<MoveiDetails /> }/>
      <Route path="search" element={<Search apipath="search/movie" title="search"/> }/>
      <Route path="movie/popular" element={<Movielist apipath="movie/popular" title="popular"/> }/>
      <Route path="movie/toprated" element={<Movielist apipath="movie/top_rated" title="top_rated" /> } />
      <Route path="movie/upcoming" element={<Movielist apipath="movie/upcoming" title="upcoming"/> }/>
      <Route path="*" element={<PageNotFound title="pagenotfound"/> }/>
    </Routes>
  );
};

export default Allroutes;
