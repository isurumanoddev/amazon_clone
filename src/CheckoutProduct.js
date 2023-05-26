import React from 'react';
import "./CheckoutProduct.css"
function CheckoutProduct({title,price,image}) {
    return (

        <div className="checkout__left__mid__product">
            <img src={image} alt=""
                 className="checkout__left__mid__image"/>
            <div className="checkout__left__mid__productInfo">
                <div className="checkout__left__mid__productInfo__name">{title}</div>
                <div className="checkout__left__mid__productInfo__style gren">In Stock</div>
                <div className="checkout__left__mid__productInfo__style"><span>Style: </span>27" IPS 75Hz
                </div>
                <div className="checkout__left__mid__productInfo__style"><span>$ {price} </span>
                </div>
                <div className="checkout__left__mid__productInfo__box">
                    <button className="checkout__left__mid__productInfo__box__quantity">Qty : {}</button>
                    <button className="checkout__left__mid__productInfo__box__remove">Delete</button>

                </div>

            </div>
        </div>

    );
}

export default CheckoutProduct;


