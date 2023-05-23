import React from 'react';
import "./Header.css"
import {ShoppingBasket} from "@mui/icons-material";

function Header() {
    return (
        <div className="header">
            <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
                className="header__logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <div className="header__searchIcon__container">

                    <img
                        src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"
                        className="header__searchIcon"/>
                </div>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>
            <div className="header__basket">
                <ShoppingBasket/>
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>

        </div>
    );

}

export default Header;