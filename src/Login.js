import React, {useState} from 'react';
import "./Login.css"
import {Link} from "react-router-dom";


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = (e) => {
        e.preventDefault()
        
    }
    const register = (e) => {

        e.preventDefault()

    }
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
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text"
                           className="login__form__input"/>

                    <label className="login__form__label">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                           className="login__form__input"/>

                    <button onClick={signIn} className="login__button">Sign In</button>
                </form>
                <label htmlFor="agree-checkbox" className="login__form__label" id={"checkbox"}>
                    <input type="checkbox" id="agree-checkbox" className="login__form__checkbox" required/>
                    I agree to the terms and conditions By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </label>
                <div className="login__new__container">
                    <hr className={"horizontal-line"}/>
                    <p className="name">New to Amazon?</p>
                    <hr className={"horizontal-line"}/>

                </div>

                <button onClick={register} className="login__registerBtn">Create your Amazon Account</button>

            </div>
        </div>
    );
}

export default Login;


