import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cart.module.scss";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../store/actions/cartActions";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDecrease = (item: any) => {
    if (item.amount === 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decreaseQuantity(item));
    }
  };

  const handleIncrease = (item: any) => {
    dispatch(increaseQuantity(item));
  };

  const handleOrder = () => {
    if (
      formData.name.trim() === "" ||
      formData.surname.trim() === "" ||
      formData.address.trim() === "" ||
      formData.phone.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(clearCart());
    const orderInfo = {
      userInfo: {
        name: formData.name,
        surname: formData.surname,
        address: formData.address,
        phone: formData.phone,
      },
      orderedGoods: cartItems.map((item: any) => ({
        title: item.title,
        price: item.price,
        amount: item.amount,
      })),
    };
    console.log("Order Info:", orderInfo);
  };

  const totalPrice = cartItems.reduce(
    (acc: number, product: any) => acc + product.price * product.amount,
    0
  );

  return (
    <div className={style.cart}>
      <div className={style.leftContainer}>
        <div className={style.list}>
          {cartItems.map((item: any, index: number) => (
            <div className={style.listItem} key={index}>
              <img src={item.imageUrl} alt="" />
              <div className={style.itemTitle}>{item.title}</div>
              <div className={style.amountControl}>
                <button onClick={() => handleDecrease(item)}>-</button>
                {item.amount}
                <button onClick={() => handleIncrease(item)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <p>total: ${totalPrice}</p>
      </div>

      <div className={style.form}>
        <form onSubmit={handleOrder}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Surname"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button type="submit" className={style.order}>
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
