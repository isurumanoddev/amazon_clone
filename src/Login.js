import React from 'react';
import "./Login.css"
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                    className="login__logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="" className="login__form">
                    <label className="login__form__label">E-mail</label>
                    <input type="text" className="login__form__input"/>

                    <label className="login__form__label">Password</label>
                    <input type="password" className="login__form__input"/>

                    <button>Sign In</button>
                </form>
                <label htmlFor="agree-checkbox" className="login__form__label" id={"checkbox"}>
                    <input type="checkbox" id="agree-checkbox" className="login__form__checkbox" required/>
                    I agree to the terms and conditions By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </label>

                <button className="login__registerBtn">Create your Amazon Account</button>
                <div className="container">
                    <hr className="horizontal-line">
                        <h1 className="name">John Doe</h1>
                        <hr className="horizontal-line">
                </div>
            </div>
        </div>
    );
}

export default Login;


