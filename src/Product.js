import React from 'react';
import "./Product.css"
import {Star} from "@mui/icons-material";

function Product({title, image, price, rating}) {

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">

                    {Array(rating).fill().map((_,i) => (
                        <Star/>
                    )) }

                </p>

            </div>
            <img src={image}
                 alt=""
                 className="product__image"/>
            <button>Add to Basket</button>

        </div>
    );
}

export default Product;


