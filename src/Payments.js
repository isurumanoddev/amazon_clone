import React from 'react';
import {Link} from "react-router-dom";
import "./Payments.css"

function Payments() {
    return (
        <div className="payments">
            <div className="payments__header">
                <Link to={"/"}>
                    <img
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                        className="header__logo"/>
                </Link>
                <h2 className="payments__header__title">Checkout ( 1 Item)</h2>
            </div>
            <div className="payments__container">
                <div className="payments__container__left">
                    <ol>
                        <li className="payment__details_list">
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
                                <h3 className="payment__details_list__payment">Add a credit or debit card</h3>
                                <div className="payment__details_list__payment__input">
                                    <label htmlFor="">Card number</label>
                                    <input type="text"/>

                                </div>
                                <div className="payment__details_list__payment__input">
                                    <label htmlFor="">Name on card</label>
                                    <input type="text"/>

                                </div>
                                <div className="payment__details_list__payment__input">
                                    <label htmlFor="">Expiration date</label>
                                    <input type="date"/>

                                </div>
                                <button className="payment__details_list__payment__submit">Add your card</button>


                            </div>

                        </li>
                        <li className="payment__details_list">
                            <div className="payment__details_list__title">Items and shipping</div>
                            <div className="payment__details_list__info">
                                <p>
                                    *Why has sales tax been applied? See tax and seller information.<br/>
                                    Need help? Check our Help pages or contact us<br/>
                                    For an item sold by Amazon.com: When you click the "Place your order" button, we'll
                                    send you an email message acknowledging receipt of your order. Your contract to
                                    purchase an item will not be complete until we send you an email notifying you that
                                    the item has been shipped.<br/>
                                    All items in this order are sold by Amazon Export Sales LLC (AES), unless otherwise
                                    noted. By placing your order, you authorize AES to designate a carrier to clear the
                                    package and pay the import fees on your (or the recipient's) behalf. Customs
                                    declarations will be made in the name and on the behalf of your (or the recipient's)
                                    behalf by the designated carrier. You can find the complete terms and conditions of
                                    your order here<br/>
                                    Important information about sales tax you may owe in your state<br/>
                                    You may return new, unopened merchandise in original condition within 30 days of
                                    delivery. Exceptions and restrictions apply. See Amazon.com's Returns Policy.<br/>
                                    Need to add more items to your order? Continue shopping on the Amazon.com
                                    homepage.</p>

                            </div>

                        </li>
                    </ol>
                </div>
                <div className="payments__container__right">
                    <div className="payments__container__right__top">
                        <button className="payments__container__right__button">Use this payment method</button>
                        <p></p>
                    </div>
                    <div className="payments__container__right__mid">
                        <div className="payments__container__right__title">Use this payment method</div>
                        <div className="payments__container__right__mid__info">
                            <p>Items:</p>
                            <p>$8.99</p>

                        </div>
                        <div className="payments__container__right__mid__info">
                            <p>Items:</p>
                            <p>$8.99</p>

                        </div>
                        <div className="payments__container__right__mid__info">
                            <p>Items:</p>
                            <p>$8.99</p>

                        </div>
                    </div>
                    <div className="payments__container__right__mid">
                        <div className="payments__container__right__botton__title">Order total:</div>
                        <div className="payments__container__right__botton__title">$51.40</div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Payments;
