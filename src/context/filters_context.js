import React, { useContext, useEffect, useReducer } from 'react'
import { URL } from '../data/url'
import reducer from '../filter_reducer'
import { ProdContext } from './prod_context';

const initialState = {
    unfiltered_products:[],
    filtered_products:[],
    grid_display:false
}

const FilterContext = React.createContext();
const FilterProvider = ({ children }) => {
    const {products}=useContext(ProdContext)
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        dispatch({type:'LOAD_PRODUCTS',payload:products})
    },[products])

    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    );
} 

export {FilterContext,FilterProvider}