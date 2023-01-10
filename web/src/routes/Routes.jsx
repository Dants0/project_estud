
import { Routes, Route } from "react-router-dom";
import React from 'react'


//Pages
import Home from "../pages/Home";
import Estudos from "../pages/Estudos";
import Contact from "../pages/Contact";

//Components
import ShowQuestions from "../components/ShowQuestions/ShowQuestions";
import Matemática from "../components/Exercises_Components/Matematica/Matemática";

const PathRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/estudos" element={<Estudos/>}/>
    <Route path="/contact" element={<Contact/>}/>
    {/* <Route path="*" element={<Page404/>}/> */}


    <Route path='/matematica/exercicios' element={<Matemática/>}/>
    </Routes>
  )
}

export default PathRoutes