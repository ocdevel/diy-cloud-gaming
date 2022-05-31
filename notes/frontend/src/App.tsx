import React from 'react'
import './App.css';
import About from './logged_out/info'
import Home from './Home'
import Appbar from './Appbar'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";


export default function App() {
    // I changed () to <></> because... actually it's a long story, i'll explain next time.
    return <>
        <BrowserRouter>
            {/* let's move Appbar outside of the routes, since it's always visible - doesn't matter which page we're on. */}
            <Appbar/>
            <Routes>
                {/* Home wasn't present, we need that */}
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </>
}