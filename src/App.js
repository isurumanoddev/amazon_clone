import './App.css';
import Header from "./Header";

import React, {useEffect} from "react";
import Home from "./Home";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";


function App() {

    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("User : ", authUser["email"])

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                })
            }
        })
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
