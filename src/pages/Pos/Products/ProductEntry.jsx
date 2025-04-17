import React from "react";
import { actionTypes } from "../../../reduser/cartReducer";

const ProductEntry = ({ product, dispatch }) => {
  const handleAddToCart = () => {
    dispatch({ type: actionTypes.ADD_ITEM, payload: { item: product } });
  };

  return (
    <div 
      className="entry" 
      onClick={handleAddToCart} 
    >
      <img alt="product_img" src={product.img} />
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="bottom">
          <div className="type">{product.type}</div>
          <div className="price">{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductEntry;