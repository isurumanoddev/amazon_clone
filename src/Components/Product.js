import React from 'react';
import "../styles/Product.css"
import {Star} from "@mui/icons-material";
import {useStateValue} from "../StateProvider";
import {Fade} from 'react-reveal';
import {Button} from "@mui/material";

function Product({title, image, price, rating, id}) {

    const [{basket}, dispatch] = useStateValue()

    // console.log(basket)
    const addToBasket = () => {

        dispatch({
            type: 'ADD_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            }

        })

    }
    return (
        <Fade>
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
                        ))}

                    </p>

                </div>
                <img src={image}
                     alt=""
                     className="product__image"/>
                <Button onClick={addToBasket}>Add to Cart</Button>

            </div>
        </Fade>
    );
}

export default Product;


