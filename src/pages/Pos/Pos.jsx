import React, { useState } from "react";
import Products from "./Products/Products";
import product_data from '../../test_data/products'

const Pos = () => {
    return (
        <div className="Pos">
            <Products products={product_data.instances}/>
        </div>
    )
}

export default Pos