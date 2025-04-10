import React from "react";
const ProductEntry = ({product}) => {
    return (
        <div className="entry">
            <img alt="product_img" src={product.img}/>
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="bottom">
                    <div className="type">{product.type}</div>
                    <div className="price">{product.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductEntry