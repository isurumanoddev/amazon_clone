import React from 'react';
import "./Product.css"
import {Star} from "@mui/icons-material";
import {useStateValue} from "./StateProvider";

function Product({title, image, price, rating,id}) {

    const [{basket},dispatch] = useStateValue()

    // console.log(basket)
    const addToBasket = () => {

        dispatch({
            type:'ADD_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            }

        })

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">

                    {Array(rating).fill().map(() => (
                        <Star/>
                    )) }

                </p>

            </div>
            <img src={image}
                 alt=""
                 className="product__image"/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    );
}

export default Product;


