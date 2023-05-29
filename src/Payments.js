import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Payments.css"
import {getBasketTotal} from "./reducer";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

function Payments() {
    const [{basket}, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const handleChange = (event) => {
        event.preventDefault()
        setDisabled(event.empty)
        setError(event.error ? event.error.message:"")

    }

    return (
        <div className="payments">
            <div className="payments__header">
                <Link to={"/"}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
                        alt=""
                        className="header__logo"/>
                </Link>
                <Link to={"/checkout"}>

                    <h2 className="payments__header__title">Checkout ( {basket.length} Item)</h2>
                </Link>
            </div>
            <div className="payments__container">
                <div className="payments__container__left">
                    <ol>
                        {basket.map((item) =>

                            <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price}/>
                        )}

                    </ol>
                </div>
                <div className="payments__container__right">
                    <ol>
                        <li className="payment__details_list__1">
                            <div className="payment__details_list__title">Shipping address</div>
                            <div className="payment__details_list__info">
                                <p>Isuru Manod Senanayake</p>
                                <p>H 51 / A</p>
                                <p>Pitawala Rd , Hiriwadunna</p>
                                <p>Kegalle, Sabaragamuva 71014</p>
                            </div>

                        </li>
                        <li className="payment__details_list">
                            <div className="payment__details_list__title"> Choose a payment method</div>
                            <div className="payment__details_list__payment">
                                <form action="" onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>

                                </form>
                            </div>

                        </li>
                        <div className="payments__container__right__top">
                            <button className="payment__details_list__payment__submit button-2">Use this payment method
                            </button>
                            <p>Choose a payment method to continue checking out. You'll still have a chance to review
                                and
                                edit your order before it's final.</p>
                        </div>
                        <div className="payments__container__right__bootom">
                            <div className="payments__container__right__botton__title">Order total:</div>
                            <div className="payments__container__right__botton__title">${getBasketTotal(basket)}</div>

                        </div>


                    </ol>


                </div>

            </div>

        </div>
    );
}

export default Payments;
