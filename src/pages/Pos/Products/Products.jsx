import React from "react";
import './scss/Product.scss';
import ProductEntry from "./ProductEntry";

const Products = ({ products, dispatch }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductEntry key={product.id} product={product} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Products;