const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, color, amount, product } = action.payload
    const temp = state.cart.find(i => i.id === id + color)
    if (temp) {
      const tempCart = state.cart.map(item => {
        if (item.id === id + color) {
          let newAmt = item.amount + amount
          if (newAmt > item.max) newAmt = item.max
          return { ...item, amount: newAmt }
        } else {
          return item
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    const temp = state.cart.filter(item => item.id !== action.payload)
    return { ...state, cart: temp }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'TOGGLE_CART_ITEM') {
    const { id, value } = action.payload
    const tempCart = state.cart.map(item => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmt = item.amount + 1
          if (newAmt > item.max) newAmt = item.max
          return { ...item, amount: newAmt }
        }
        if (value === 'dec') {
          let newAmt = item.amount - 1
          if (newAmt < 1) newAmt = 1
          return { ...item, amount: newAmt }
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'COUNT_CART_TOTALS') {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.total_items += amount
        total.total_amount += price * amount
        return total
      },
      { total_items: 0, total_amount: 0 }
    )
    return { ...state, total_items, total_amount }
  }
}

export default reducer
