import React from 'react';
import "../styles/CheckoutProduct.css"
import {useStateValue} from "../StateProvider";
import {Fade} from 'react-reveal';
import {Button} from "@mui/material";


function CheckoutProduct({id, title, price, image, hideBtn}) {
    const [{basket}, dispatch] = useStateValue()



    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_ITEM",
            id: id,

        })
    }

    return (
        <Fade bottom>
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
                        {!hideBtn && (<Button className={"button"} onClick={removeFromBasket}>Delete
                        </Button>)

                        }
                    </div>
                </div>
            </div>
        </Fade>

    );
}

export default CheckoutProduct;


