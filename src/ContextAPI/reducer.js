export const initialState = {
  basket: [],
  // user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((currVal, acc) => acc.price + currVal, 0);
console.log(getBasketTotal);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't Remove Product (id: ${action.id}) as it's not in BASKET!!!`
        );
      }
      return {
        // ...state,
        // basket: state.basket.filter((item) => item.id !== action.id),
        ...state,
        basket: newBasket,
      };
    case "EMPTY_CART":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
