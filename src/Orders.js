import React from 'react';
import "/styles/Orders.css"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./Components/CheckoutProduct";

function Orders() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="orders">
            <h1>Orders page</h1>
            {basket.map((item) =>

                <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price}/>
            )}


        </div>
    );
}

export default Orders;

