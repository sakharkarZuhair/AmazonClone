import React from "react";
import "../Styles/Home.css";

import Product from "../Components/Product";

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55C1PTZ (Dark Steel Silver) (2021 Model) (OLED55C1PTZ)"
            price={2220}
            image="https://m.media-amazon.com/images/I/71tU03UNI1L._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="
            Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6 FHD IPS Gaming Laptop (8GB/512GB SSD/Windows 11/Nvidia GTX 1650 4GB/120Hz Refresh Rate/Backlit/3months Xbox Game Pass/Shadow Black/2.25Kg), 82K200X6IN"
            price={1580}
            rating={4}
            image="https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg"
          />
          {/* Product */}
        </div>
        <div className="home__row">
          <Product
            id="1111111"
            title="Skybags Trooper 55cm + 65cm Polycarbonate Red and White Hardsided Cabin + Check-in Luggage Set"
            price={120}
            rating={3}
            image="https://m.media-amazon.com/images/I/71dhfRPcXmL._UL1000_.jpg"
          />
          <Product
            id="222222"
            title="Lavie Sport Sydney 34L School Bags, College Bags | Backpack Bags for Women | Girls bag"
            price={190}
            rating={3}
            image="https://m.media-amazon.com/images/I/91I1LaP0g0L._UL1500_.jpg"
          />
          <Product
            id="4444444"
            title="Safari Polycarbonate Printed Multi-Color 4Wheels Hardsided Strolly Luggage (Small 55 cm)"
            price={200}
            rating={4}
            image="https://m.media-amazon.com/images/I/61HDUOeastS._UL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5654645"
            title="Sony Bravia 164 cm (65 inches) XR series 4K Ultra HD Smart OLED Google TV XR-65A80J (Black) (2021 Model) | with Alexa Compatibility"
            price={3181}
            rating={5}
            image="https://m.media-amazon.com/images/I/81bRuWhi-ML._AC_SX480_SY360_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
