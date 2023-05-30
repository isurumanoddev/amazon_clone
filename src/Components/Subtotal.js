import React from 'react'
import "../styles/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import {useNavigate} from "react-router-dom";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue()
    const navigate = useNavigate();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <div className={"subtotal__container"}>
                        <h4 className="subtotal__price">Subtotal ({basket.length} item): <span className="price">{value}</span></h4>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This Order Contain a gift
                        </small>
                        <button onClick={e => navigate("/payment")} type={"submit"} className="subtotal__checkoutBtn">Proceed to Checkout</button>

                    </div>

                )}
                value={getBasketTotal(basket)}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />


        </div>
    );
}

export default Subtotal;