import React from 'react';
import "./styles/Checkout.css"
import Subtotal from "./Components/Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./Components/CheckoutProduct";




function Checkout() {
    const [{basket}, dispatch] = useStateValue()


    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__left__top">

                    <h3 className="checkout__title">Shopping Cart</h3>

                </div>

                <div className="checkout__left__mid">

                        {basket.map((item) =>

                            <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price}/>
                        )}




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


