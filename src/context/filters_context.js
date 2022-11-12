import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../filter_reducer'
import { ProdContext } from './prod_context';

const initialState = {
    unfiltered_products:[],
    filtered_products:[],
    grid_display:true
}

const FilterContext = React.createContext();
const FilterProvider = ({ children }) => {
    const {products}=useContext(ProdContext)
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        dispatch({type:'LOAD_PRODUCTS',payload:products})
    },[products])

    const setGrid=()=>{
        dispatch({type:'SET_GRID'})
    }

    const setList=()=>{
        dispatch({type:'SET_LIST'})
    }

    return (
        <FilterContext.Provider value={{...state,setGrid,setList}}>
            {children}
        </FilterContext.Provider>
    );
} 

export {FilterContext,FilterProvider}