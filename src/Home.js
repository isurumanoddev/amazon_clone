import React from 'react';
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    className="home__backImg"/>
            </div>

                <div className="home__row">

                <Product
                    title={"Brady Men's Cotton Fleece Big Twelve Hoodie"}
                    price={19.99}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/71dv9a+ka9L._AC_UX385_.jpg"}
                />
                <Product
                    title={"EFAN Women's Cute Hoodies Teen Girl Fall Jacket Oversized Sweatshirts Casual Drawstring Clothes Zip Up Y2K Hoodie with Pocket"}
                    price={19.99}
                    rating={1}
                    image={"https://m.media-amazon.com/images/I/71eMTvCGloL._AC_UX342_.jpg"}
                />
            </div>

            <div className="home__row">


                <Product
                    title={"Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray"}
                    price={19.99}
                    rating={2}
                    image={"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX522_.jpg"}
                />

                <Product
                    title={"Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"}
                    price={19.99}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX522_.jpg"}
                />
                <Product
                    title={"Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray"}
                    price={19.99}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX342_.jpg"}
                />


            </div>


            <div className="home__row">
                <Product
                    title={"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"}
                    price={19.99}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"}
                />
                <Product
                    title={"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break"}
                    price={19.99}
                    rating={2}
                    image={"https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg"}
                />
            </div>
        </div>
    );
}

export default Home;
