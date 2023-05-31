import React, {useEffect, useState} from 'react';
import "./styles/Orders.css"
import {useStateValue} from "./StateProvider";

import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "./firebase";


function Orders() {
    const [{basket, user}, dispatch] = useStateValue();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            const usersCollectionRef = collection(db, "users");
            const userDocRef = doc(usersCollectionRef, user?.uid);
            const orderCollectionRef = collection(userDocRef, "order");

            getDocs(orderCollectionRef)
                .then(snapShot => {
                    setOrders(snapShot.docs.map(doc => ({
                        id:doc.id,
                        data:doc.data()
                    })))
                    console.log("snapShot : ",snapShot)
                })

        } else {
            setOrders([])
        }


    }, [user])
    console.log("orders : ",orders)

    return (
        <div className="orders">
            <h1>Orders page</h1>


        </div>
    );
}

export default Orders;

