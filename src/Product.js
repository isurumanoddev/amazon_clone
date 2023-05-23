import React from 'react';
import  "./Product.css"
import {Star} from "@mui/icons-material";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <p className="product__rating">
                    <Star/>
                    <Star/>

                </p>

            </div>
            <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"
                 alt=""
                 className="product__image"/>
            <button >Add to Basket</button>

        </div>
    );
}

export default Product;


