import React from "react";
import "../Styles/SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../ContextAPI/StateProvider";
import { getBasketTotal } from "../ContextAPI/reducer";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const emptyCartHandler = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
      <button onClick={emptyCartHandler}>Remove All Product</button>
    </div>
  );
};
export default SubTotal;
