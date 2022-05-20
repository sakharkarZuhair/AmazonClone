import "../Styles/Checkout.css";
import React from "react";
import SubTotal from "../Components/SubTotal";

const CheckoutScreen = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/S/aplus-media/sc/a9773f7a-71f0-424d-b4ae-5054445a1844.__CR73,0,2428,751_PT0_SX970_V1___.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">
            Your Shopping Baskte
            {/* BsketItem */}
            {/* BsketItem */}
            {/* BsketItem */}
            {/* BsketItem */}
            {/* BsketItem */}
          </h2>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckoutScreen;
