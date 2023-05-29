import './App.css';
import Header from "./Header";

import React, {useEffect} from "react";
import Home from "./Home";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
    useEffect(() => {
        return  {

        };
    }, []);




    return (


        <div className="App">
            <BrowserRouter>
                <Header/>


                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/login" element={<Login/>}/>

                </Routes>
            </BrowserRouter>

        </div>

    );
}

export default App;
