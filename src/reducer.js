const reducer=(state,action)=>{
    if(action.type==='DISPLAY_ITEMS'){
        return {...state,products:action.payload}
    }
}

export default reducer;