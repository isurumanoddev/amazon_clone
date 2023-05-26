import React from 'react';
import "./Checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue()

    let cartTotal = 0



    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__left__top">

                    <h3 className="checkout__title">Shopping Cart</h3>

                </div>

                <div className="checkout__left__mid">


                    <div className="checkout__left__mid__product">
                        <img src="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX522_.jpg" alt=""
                             className="checkout__left__mid__image"/>
                        <div className="checkout__left__mid__productInfo">
                            <div className="checkout__left__mid__productInfo__name">
                                Sceptre IPS 27-Inch Business Computer Monitor 1080p 75Hz with HDMI VGA Build-in
                                Speakers,
                                Machine Black 2020 (E275W-FPT), 27" IPS 75Hz
                            </div>
                            <div className="checkout__left__mid__productInfo__style gren">In Stock</div>
                            <div className="checkout__left__mid__productInfo__style"><span>Style: </span>27" IPS 75Hz
                            </div>
                            <div className="checkout__left__mid__productInfo__style"><span>Pattern: </span> Monitor
                            </div>
                            <div className="checkout__left__mid__productInfo__box">
                                <button className="checkout__left__mid__productInfo__box__quantity">Qty : 1</button>
                                <button className="checkout__left__mid__productInfo__box__remove">Delete</button>

                            </div>

                        </div>
                    </div>



                </div>
                <hr/>


            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    );
}

export default Checkout;


