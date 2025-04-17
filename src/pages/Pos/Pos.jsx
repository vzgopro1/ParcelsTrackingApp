import React, { useReducer, useState } from "react";
import Products from "./Products/Products";
import product_data from '../../test_data/products';
import Cart from "./Cart/Cart";
import './styles/index.scss';
import cartReducer, { initialState } from "../../reduser/cartReducer";

const Pos = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = product_data.instances.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Pos">
      <div className="content1">
        <div className="search">
          <input
            placeholder="Search something sweet on your mind..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Products products={filteredProducts} dispatch={dispatch} />
      </div>
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default Pos;