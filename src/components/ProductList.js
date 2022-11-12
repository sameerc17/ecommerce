import React, { useContext } from "react";
import { FilterContext } from "../context/filters_context";
import { GridDisplay } from "./GridDisplay";
import {ListDisplay} from "./ListDisplay";
const ProductList = () => {
    const { filtered_products : products, grid_display} =useContext(FilterContext)
    
    if(products.length<1)
    return <h5>Sorry, no products mathed your filter criteria</h5>
    if(grid_display===false)
    return <ListDisplay products={products}/>
    return <GridDisplay products={products }>Product List</GridDisplay>
}

export default ProductList