import React from 'react';
import "../styles/Home.css"
import Product from "./Product";
import {Fade} from "react-reveal";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    className="home__backImg"/>
            </div>

            <Fade bottom>
                <div className="home__row">

                    <Product
                        title={"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"}
                        price={15.00}
                        rating={3}
                        image={"https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"}
                    />
                    <Product
                        title={"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break"}
                        price={19.00}
                        rating={2}
                        image={"https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg"}
                    />
                    <Product
                        id={6}
                        title={"The Hill We Climb: An Inaugural Poem for the Country"}
                        price={40.00}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/91QclGg4BjL._AC_UL210_SR195,210_.jpg"}
                    />
                    <Product
                        id={6}
                        title={"Fourth Wing (The Empyrean, 1)"}
                        price={16.00}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/91qlE6JayPL._AC_UL210_SR195,210_.jpg"}
                    />
                </div>
            </Fade>
            <Fade bottom>
                <div className="home__row">

                    <Product
                        id={3}
                        title={"Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray"}
                        price={890.00}
                        rating={2}
                        image={"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX522_.jpg"}
                    />
                    <Product
                        id={4}
                        title={"Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"}
                        price={220.00}
                        rating={5}
                        image={"https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX522_.jpg"}
                    />


                </div>
            </Fade>
            <Fade bottom>
                <div className="home__row">


                    <Product
                        id={5}
                        title={"Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray"}
                        price={450.00}
                        rating={4}
                        image={"https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX342_.jpg"}
                    />
                    <Product
                        id={5}
                        title={"Lenovo IdeaPad Gaming 3 - (2022) - Essential Gaming Laptop Computer - 15.6\" FHD - 120Hz - AMD Ryzen 5 6600H - NVIDIA GeForce RTX 3050 - 8GB DDR5 RAM - 256GB NVMe Storage - Windows 11 Home/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray"}
                        price={699.00}
                        rating={4}
                        image={"https://m.media-amazon.com/images/I/81zcUyiNcUL._AC_SX679_.jpg"}
                    />


                </div>
            </Fade>
            <Fade bottom>
                <div className="home__row">
                    <Product
                        id={1}
                        title={"Brady Men's Cotton Fleece Big Twelve Hoodie"}
                        price={20.00}
                        rating={4} image={"https://m.media-amazon.com/images/I/71dv9a+ka9L._AC_UX385_.jpg"}
                    />
                    <Product
                        id={2}
                        title={"EFAN Women's Cute Hoodies Teen Girl Fall Jacket Oversized Sweatshirts Casual Drawstring Clothes Zip Up Y2K Hoodie with Pocket"}
                        price={19.00}
                        rating={1}
                        image={"https://m.media-amazon.com/images/I/71eMTvCGloL._AC_UX342_.jpg"}
                    />
                    <Product
                        id={2}
                        title={"Ronny Kobo Collective RTR Design Collective Santana Dress"}
                        price={225.00}
                        rating={1}
                        image={"https://m.media-amazon.com/images/I/81EhYuGtBrL._AC_UY550_.jpg"}
                    />


                </div>
            </Fade>


        </div>
    );
}

export default Home;
