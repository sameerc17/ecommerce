import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../filter_reducer'
import { ProdContext } from './prod_context';

const initialState = {
    unfiltered_products: [],
    filtered_products: [],
    grid_display: true,
    sort: 'name-a',
    filters: {
        text: '',
        category: 'all',
        color: 'all',
        company: 'all',
        price: 0,
        min_price: 0,
        max_price: 0,
        shipping: false
    }
}

const FilterContext = React.createContext();
const FilterProvider = ({ children }) => {
    const { products } = useContext(ProdContext)
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({ type: 'LOAD_PRODUCTS', payload: products })
    }, [products])

    useEffect(() => {
        dispatch({type:'FILTER_ITEMS'})
        dispatch({ type: 'SORT_ITEMS' })
    }, [state.sort, state.filters])

    const setGrid = () => {
        dispatch({ type: 'SET_GRID' })
    }

    const setList = () => {
        dispatch({ type: 'SET_LIST' })
    }

    const sortBy = (e) => {
        const value = e.target.value;
        dispatch({ type: 'SORTING_CRITERIA', payload: value })
    }

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'category')
            value = e.target.textContent;
        if (name === 'color')
            value = e.target.dataset.color;
        if (name === 'price')
            value = Number(value);
        if(name=== 'shipping')
            value=e.target.checked;
        dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } })
    }

    const clearFilters = () => {
        dispatch({type:'CLEAR_FILTERS'})

    }

    return (
        <FilterContext.Provider value={{ ...state, setGrid, setList, sortBy, updateFilters, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export { FilterContext, FilterProvider }