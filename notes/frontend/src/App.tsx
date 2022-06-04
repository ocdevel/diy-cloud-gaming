import React from 'react'
import './App.css';
import About from './logged_out/about'
import Notes from './logged_out/about/Notes'
import Home from './home'
import Drawer from './Drawer'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Payments from './Drawer/Payments';


function App() {
    return <div>
        <CssBaseline />
        <BrowserRouter>
            <Drawer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="about/notes" element={<Notes />} />
                    <Route path="Drawer/Payments" element={<Payments />} />
                </Routes>
            </Drawer>
        </BrowserRouter>
    </div>
}

export default App;