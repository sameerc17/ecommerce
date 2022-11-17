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
    if(action.type==='SORTING_CRITERIA'){
        return {...state, sort:action.payload}
    }
    if(action.type==='SORT_ITEMS'){
        const {sort,filtered_products} =state;
        let tempArray=[...filtered_products];
        if(sort==='name-a'){
            tempArray=tempArray.sort((a,b)=>a.name.localeCompare(b.name));

        }
        if(sort==='name-z'){
            tempArray=tempArray.sort((a,b)=>b.name.localeCompare(a.name));
    
        }
        if(sort==='price-lowest'){
            tempArray=tempArray.sort((a,b)=>a.price-b.price);

        }
        if(sort==='price-highest'){
            tempArray=tempArray.sort((a,b)=>b.price-a.price);
        }
        return {...state,filtered_products:tempArray}
    }
}

export default reducer