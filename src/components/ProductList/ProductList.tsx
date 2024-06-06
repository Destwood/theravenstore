import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import style from "./ProductList.module.scss";

const ProductList = () => {
  const products = useSelector((state: any) => state.products);

  return (
    <div className={style.productList}>
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
