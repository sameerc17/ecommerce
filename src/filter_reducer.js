const reducer = (state, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return { ...state, unfiltered_products: [...action.payload], filtered_products: [...action.payload] }
    }
    if(action.type==='SET_GRID'){
        return {...state,grid_display:true}
    }
    if(action.type==='SET_LIST'){
        return {...state,grid_display:false}
    }
}

export default reducer