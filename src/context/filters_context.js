import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../filter_reducer'
import { ProdContext } from './prod_context';

const initialState = {
    unfiltered_products:[],
    filtered_products:[],
    grid_display:true,
    sort:'name-a'
}

const FilterContext = React.createContext();
const FilterProvider = ({ children }) => {
    const {products}=useContext(ProdContext)
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        dispatch({type:'LOAD_PRODUCTS',payload:products})
    },[products])

    useEffect(()=>{
        dispatch({type:'SORT_ITEMS'})
    },[state.sort])

    const setGrid=()=>{
        dispatch({type:'SET_GRID'})
    }

    const setList=()=>{
        dispatch({type:'SET_LIST'})
    }

    const sortBy=(e)=>{
        const value=e.target.value;
        dispatch({type:'SORTING_CRITERIA',payload:value})
    }

    return (
        <FilterContext.Provider value={{...state,setGrid,setList,sortBy}}>
            {children}
        </FilterContext.Provider>
    );
} 

export {FilterContext,FilterProvider}