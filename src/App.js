import './App.css';
import Header from "./Header";

import React from "react";
import Home from "./Home";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from "./Checkout";



function App() {
    return (


        <div className="App">
            <BrowserRouter>
                <Header/>


                <Routes>
                   <Route path="/" element={<Home/>} />
                   <Route path="/checkout" element={<Checkout/>} />
                   <Route path="/login" element={<L/>} />

                </Routes>
            </BrowserRouter>

        </div>

);
}

export default App;
