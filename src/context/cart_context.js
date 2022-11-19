import React, { useEffect, useReducer } from 'react'
import reducer from '../cart_reducer'
// import {
//   ,
//   REMOVE_CART_ITEM,
//   TOGGLE_CART_ITEM_AMOUNT,
//   CLEAR_CART,
//   COUNT_CART_TOTALS,
// } from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 499
}

const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } })
  }
  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  const toggleAmount = (id, value) => {
    dispatch({ type: 'TOGGLE_CART_ITEM', payload: { id, value } })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  useEffect(() => {
    dispatch({ type: 'COUNT_CART_TOTALS' })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
