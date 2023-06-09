import React from 'react';
import "../styles/Header.css"
import {ArrowDropDown, ShoppingBasket} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {auth} from "../firebase";
import {IconButton} from "@mui/material";


function Header() {

    const [{basket, user}, dispatch] = useStateValue()

    const getUsername = user?.email.split("@")[0]

    const handleAuthentication = async () => {
        await auth.signOut()
    }

    return (
        <div className="header">
            <Link to={"/"}>
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                    className="header__logo"/>
            </Link>
            <div className="header__search">
                <button className="header__searchAll__container">All
                    <ArrowDropDown/>
                </button>
                <input type="text" className="header__searchInput" placeholder={"Search Amazon"}/>
                <div className="header__searchIcon__container">

                    <img
                        src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"
                        className="header__searchIcon" alt={""}/>
                </div>
            </div>
            <div className="header__nav">
                <Link to={user === null && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? getUsername : "Guest"} </span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to={"/orders"}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className="header__basket">
                    <IconButton>
                        <ShoppingBasket className={"basket__icon"}/>
                    </IconButton>


                    <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                </div>
            </Link>

        </div>
    );

}

export default Header;