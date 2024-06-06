import React from "react";
import style from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/actions/cartActions";

interface ProductProps {
  product: {
    title: string;
    imageUrl: string;
    price: number;
  };
}

const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { cartItems: any[] } }) => state.cart.cartItems
  );

  const isItemInCart = cartItems.some(
    (item: { title: string }) => item.title === product.title
  );

  return (
    <div className={style.product}>
      <img src={product.imageUrl} alt="" />
      <p>{product.title}</p>
      <div className={style.bottom}>
        <p>${product.price}</p>
        {isItemInCart ? (
          <button onClick={() => dispatch(removeFromCart(product))}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
