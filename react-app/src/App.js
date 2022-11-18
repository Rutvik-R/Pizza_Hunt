import React from "react"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./components/userAuthPage/login/Login"
import Signup from "./components/userAuthPage/signup/Signup"
import Dashboard from "./components/userDashboard/Dashboard"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    )
}