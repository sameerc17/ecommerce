const reducer = (state, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        let max = action.payload.map((p) => p.price)
        max = Math.max(...max)
        return { ...state, unfiltered_products: [...action.payload], filtered_products: [...action.payload], filters: { ...state.filters, max_price: max, price: max } }
    }
    if (action.type === 'SET_GRID') {
        return { ...state, grid_display: true }
    }
    if (action.type === 'SET_LIST') {
        return { ...state, grid_display: false }
    }
    if (action.type === 'SORTING_CRITERIA') {
        return { ...state, sort: action.payload }
    }
    if (action.type === 'SORT_ITEMS') {
        const { sort, filtered_products } = state;
        let tempArray = [...filtered_products];
        if (sort === 'name-a') {
            tempArray = tempArray.sort((a, b) => a.name.localeCompare(b.name));

        }
        if (sort === 'name-z') {
            tempArray = tempArray.sort((a, b) => b.name.localeCompare(a.name));

        }
        if (sort === 'price-lowest') {
            tempArray = tempArray.sort((a, b) => a.price - b.price);

        }
        if (sort === 'price-highest') {
            tempArray = tempArray.sort((a, b) => b.price - a.price);
        }
        return { ...state, filtered_products: tempArray }
    }
    if(action.type==='FILTER_ITEMS'){
        const {unfiltered_products}=state;
        const {text,category,company,color,price,shipping}=state.filters;
        let tempArray=[...unfiltered_products];

        if(text){
            tempArray=tempArray.filter((item)=>{
                return item.name.toLowerCase().startsWith(text)
            })
        }

        if(category!=='all'){
            tempArray=tempArray.filter((item)=>{
                return item.category===category
            })
        }

        if(company!=='all'){
            tempArray=tempArray.filter((item)=>{
                return item.company===company
            })
        }

        if(color!=='all'){
            tempArray=tempArray.filter((item)=>{
                return item.colors.find((c)=>c===color)
            })
        }

        tempArray=tempArray.filter((item)=> item.price<price)

        if(shipping){
            tempArray=tempArray.filter((item)=> item.shipping===true)
        }

        return {...state,filtered_products:tempArray}
    }
    if (action.type === 'UPDATE_FILTERS') {
        const { name, value } = action.payload;
        return { ...state, filters: { ...state.filters, [name]: value } }
    }
    if (action.type === 'CLEAR_FILTERS') {
        return {
            ...state, filters: {
                ...state.filters,
                text: '',
                category: 'all',
                color: 'all',
                company: 'all',
                price: state.filters.max_price,
                shipping: false
            }
        }
    }
}

export default reducer