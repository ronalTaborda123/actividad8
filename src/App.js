import React from "react";
import { Router } from "@reach/router";
import ProductList from "../src/components/App";
import ProductForm from "../src/components/index";

const NotFound = () => <p>Sorry....</p>;

function App() {
  return (
    <Router>
      <ProductList path="/" />
      <ProductForm path="/Productform" />
      <NotFound default />
    </Router>
  );
}

export default App;
