import React from "react";
import './scss/Product.scss'
import ProductEntry from "./ProductEntry";

const Products = ({products}) => {
    return (
        <div className="products">
            {products.map((product) => (<ProductEntry product={product}/>))}
        </div>
    )
}

export default Products