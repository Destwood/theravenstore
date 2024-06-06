import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Header.module.scss";
import Cart from "../Cart/Cart";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (acc: number, product: any) => acc + product.price * product.amount,
    0
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={style.header}>
      <p>Current price: ${totalPrice}</p>
      <div className={style.cart} onClick={toggleCart}>
        CART
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
}

export default Header;
