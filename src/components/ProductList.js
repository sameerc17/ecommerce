import React, { useContext } from "react";
import { ProdContext } from "../context/prod_context";
import { GridDisplay } from "./GridDisplay";
const ProductList = () => {
    const { products } = useContext(ProdContext)
    return <GridDisplay products={products}>Product List</GridDisplay>
}

export default ProductList