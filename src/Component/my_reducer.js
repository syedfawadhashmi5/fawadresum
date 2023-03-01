
const initialState = [];

const my_reducer = (cart = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let tempcart = cart.filter((item) => item.id === action.payload.id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    case "REMOVE":
      return cart.filter((item) => item.id !== action.payload.id);
    case "INCREASE":
      let increasecart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return increasecart;
    case "DECREASE":
      let decreasecart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return decreasecart;
    default:
      return cart;
  }
};

export default my_reducer;
