import './styles/App.css';
import Header from "./Components/Header";

import React, {useEffect} from "react";
import Home from "./Components/Home";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payments from "./Payments";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe(
    "pk_test_51NDDeGCTBPVFaxN9EEYNJCVb2lVydpDVVCGTqh2Tx1bidionz9YbRQA6VHphEbD8EbDt7JUv3ySeqk1Y3ewX6zqF00JgsyGc7X"
)

function App() {
    const [{basket, user}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {


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
                    <Route path="/orders" element={<Orders/>}/>

                    <Route path="/payment" element={
                        <Elements stripe={promise}>
                            <Payments/>
                        </Elements>

                    }/>

                </Routes>
            </BrowserRouter>

        </div>

    );
}

export default App;
