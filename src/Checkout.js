import React from 'react';
import "./Checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

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
                    {
                        basket.map(item =>
                        <CheckoutProduct title={item.title} price={item.price} image={item.image}/>

                        )
                    }






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


