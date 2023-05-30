import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./styles/Payments.css"
import {getBasketTotal} from "./reducer";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./Components/CheckoutProduct";
import {useStripe, useElements, CardElement,} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import axios from "./axios";


function Payments() {
    const navigate = useNavigate()
    const [{basket}, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })

            setClientSecret(response.data.clientSecret)
        }
        getClientSecret().then(r => console.log(r));
    }, [basket])
    console.log("clientSecret : ", clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)


        const payLoad = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
            .then(({paymentIntent}) => {
                setSucceeded(true)
                setError(null)
                setProcessing(false)
                dispatch({
                    type:"EMPTY_BASKET",
                })
                navigate("/");
            })
    }
    const handleChange = (event) => {
        // event.preventDefault()
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")

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
                            <div className="payment__details_list__title"> Add Debit or Credit Card Details</div>
                            <div className="payment__details_list__payment">
                                <form action="" onSubmit={handleSubmit}>
                                    <CardElement className={"payment__cardElement"} onChange={handleChange}/>


                                    <div className="payments__container__right__top">
                                        <button
                                            type={"submit"}
                                            disabled={processing || disabled || succeeded}
                                            className="payment__details_list__payment__submit button-2">{processing ? "Processing" : "Make Payment"}
                                        </button>
                                        <p>Choose a payment method to continue checking out. You'll still have a chance
                                            to review and edit your order before it's final.</p>

                                        {error && <div>{error}</div>}
                                    </div>
                                </form>
                            </div>

                        </li>

                        <CurrencyFormat
                            renderText={(value) => (
                                <div className="payments__container__right__bootom">
                                    <div className="payments__container__right__botton__title">Order total:</div>
                                    <div
                                        className="payments__container__right__botton__title">{value}</div>

                                </div>

                            )}
                            value={getBasketTotal(basket)}
                            decimalScale={2}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />


                    </ol>


                </div>

            </div>

        </div>
    );
}

export default Payments;
