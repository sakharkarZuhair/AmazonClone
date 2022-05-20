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
    default:
      return state;
  }
};

export default reducer;
