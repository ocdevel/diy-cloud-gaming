import React from 'react'
import './App.css';
import About from './logged_out/about/info'
import Notes from './logged_out/about/Notes'
import Home from './Home'
import Appbar from './Appbar'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
    return <div>
        <CssBaseline />
        <BrowserRouter>
            <Appbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="about/notes" element={<Notes />} />
                </Routes>
            </Appbar>
        </BrowserRouter>
    </div>
}

export default App;