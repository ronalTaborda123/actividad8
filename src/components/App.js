import React, { useState } from "react";
import ProductItem from "../components/item";
import { useEffect } from "react";
import _ from "lodash";

function fetchListProduc() {
  const url = "http://localhost:18080/api/v1/product";

  return window
    .fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log({ response });
      return response;
    });
}
const ProductList = () => {
  const [products, setProductData] = useState([]);
  useEffect(() => {
    fetchListProduc().then((productoData) => {
      console.log({ productoData });
      setProductData(productoData);
    });
  }, []);

  return !_.isEmpty(products) ? (
    <ProductItem rows={products}></ProductItem>
  ) : (
    <></>
  );
};

export default ProductList;
