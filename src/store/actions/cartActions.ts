export const addToCart = ( product: object ) => ( {
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = ( product: object ) => ( {
  type: 'REMOVE_FROM_CART',
  payload: product,
});

export const increaseQuantity = (product: object) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: product,
  };
};

export const decreaseQuantity = (product: object) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: product,
  };
};
export const clearCart = () => ({
  type: "CLEAR_CART",
});