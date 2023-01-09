
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Estudos from "../pages/Estudos";
import Contact from "../pages/Contact";

import React from 'react'

const PathRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/estudos" element={<Estudos/>}/>
    <Route path="/contact" element={<Contact/>}/>
    {/* <Route path="*" element={<Page404/>}/> */}
    </Routes>
  )
}

export default PathRoutes