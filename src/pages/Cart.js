import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart_context'
import CartData from '../components/CartData'

const Cart = () => {
  const { cart } = useContext(CartContext)
  if (cart.length < 1)
    return (
      <Wrapper className='error-page '>
        <div className='empty'>
          <h2>Your cart is empty ! </h2>
        </div>
        <Link to='/products' className='btn'>
          Fill it
        </Link>
      </Wrapper>
    )
  return (
    <main>
      <Wrapper className='content-page'>
        <CartData />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-firection: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .empty {
    text-align: center;
    margin-right: 1rem;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default Cart
