import React, {useEffect, useState} from 'react';
import "./styles/Orders.css"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./Components/CheckoutProduct";
import {doc, getDoc} from "firebase/firestore";
import {db} from "./firebase";


function Orders() {
    const [{basket, user}, dispatch] = useStateValue()

    const [orders, setOrders] = useState([])

    useEffect(async () => {
        const docRef = doc(db, "users", user?.uid);
        const docSnap =await getDoc(docRef)

        console.log("Document data:", docSnap);

    }, [])

    return (
        <div className="orders">
            <h1>Orders page</h1>
            {orders.map((item) =>

                <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price}/>
            )}


        </div>
    );
}

export default Orders;

