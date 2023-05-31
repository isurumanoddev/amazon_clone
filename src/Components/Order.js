import React from 'react';
import "../styles/Order.css"
import moment from "moment"
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../reducer";

function Order({order}) {
    return (
        <div className={"order"}>
            <div className="order__info">
                  <p className="order__date">Order Date :{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>

            <p className="order__id">Order ID :
                <small>{order.id}</small>
            </p>
                     <CurrencyFormat
                renderText={(value) => (
                    <div className={"subtotal__container"}>
                        <h4 className="subtotal__price">Subtotal ({order.data.basket.length} items): <span
                            className="price">{value}</span></h4>


                    </div>

                )}
                value={getBasketTotal(order.data.basket)}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            </div>



            <div className="order__container">
                {
                    order.data.basket?.map(item =>
                        <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price}/>
                    )
                }

            </div>



        </div>
    );
}

export default Order;

