import React, { useEffect, useReducer } from 'react'
import { URL } from '../data/url'
import reducer from '../reducer'
const initialState = {
    products:[],
    filtered_products:[]
}
const ProdContext = React.createContext();
const ProdProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState)

    const fetchData = async (url) => {
        const response=await fetch(url);
        const data=await response.json();
        dispatch({type:'DISPLAY_ITEMS',payload:data})
    }

    useEffect(()=>{
        fetchData(URL)
    },[])

    return (
        <ProdContext.Provider value={{...state}}>
            {children}
        </ProdContext.Provider>
    );
} 

export {ProdContext,ProdProvider}