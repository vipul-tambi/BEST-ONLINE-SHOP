import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/actions/cartActions";
import ProductDetailsPageComponent from "./components/ProductDetalsPageComponent";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();

  return (
    <ProductDetailsPageComponent
      addToCartReduxAction={addToCart}
      reduxDispatch={dispatch}
    />
  );
};

export default ProductDetailsPage;
