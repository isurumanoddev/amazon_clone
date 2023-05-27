import React from 'react';
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,title, price, image}) {
    const [{basket}, dispatch] = useStateValue()


    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_ITEM",
            id:id,

        })
    }

    return (

        <div className="checkout__left__mid__product">
            <img src={image} alt=""
                 className="checkout__left__mid__image"/>
            <div className="checkout__left__mid__productInfo">
                <div className="checkout__left__mid__productInfo__details">
                    <div className="checkout__left__mid__productInfo__name">{title}</div>
                    <div className="checkout__left__mid__productInfo__style gren">In Stock</div>
                    <div className="checkout__left__mid__productInfo__style"><span>$ {price} </span></div>
                </div>
                <div className="checkout__left__mid__productInfo__buttons">
                    <button className="checkout__left__mid__productInfo__box__quantity">Qty : {}</button>
                    <button onClick={removeFromBasket} className="checkout__left__mid__productInfo__box__remove">Delete</button>
                </div>
            </div>
        </div>

    );
}

export default CheckoutProduct;


