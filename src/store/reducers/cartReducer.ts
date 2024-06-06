const cartFromLocalStorage = localStorage.getItem('cart');
const initialState = {
  cartItems: cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [], 
};
console.log(localStorage.getItem('cart'))
const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex((item: { title: string }) => item.title === action.payload.title);

      if (existingItemIndex !== -1) {
        return state;
      }

      const updatedCart = [...state.cartItems, { ...action.payload, amount: 1 }]; 
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 

      return {
        ...state,
        cartItems: updatedCart,
      };
    case "REMOVE_FROM_CART":
      const itemToRemoveIndex = state.cartItems.findIndex((item: { title: string })  => item.title === action.payload.title);

      if (itemToRemoveIndex === -1) {
        return state;
      }

      const updatedCartItems = state.cartItems.filter((item: { title: string }, index: number) => index !== itemToRemoveIndex);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems)); 

      return {
        ...state,
        cartItems: updatedCartItems,
      };
     case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item: { title: string, amount: number })=>
          item.title === action.payload.title ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item: { title: string, amount: number }) =>
          item.title === action.payload.title && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
        ),
      };
    case "CLEAR_CART":
      localStorage.setItem('cart', JSON.stringify([])); 
      return {
        ...state,
        cartItems: [],
      };
    
    default:
      return state;
  }
};

export default cartReducer;