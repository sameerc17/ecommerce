const reducer = (state, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return { ...state, unfiltered_products: [...action.payload], filtered_products: [...action.payload] }
    }
}

export default reducer