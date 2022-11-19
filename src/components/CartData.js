import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { CartContext } from '../context/cart_context'

const CartData = () => {
    const { cart, clearCart } = useContext(CartContext)
    return <Wrapper className='section section-center'>
        <CartColumns/>
            {
                cart.map((item)=>{
                    return <CartItem key={item.id} {...item}/>
                })
            }
            <hr/>
            <div className='link-container'>
                <Link to='/products' className='link-btn continue'>
                    Continue Shopping
                </Link>
                <button type='button' className='link-btn clear-btn' onClick={clearCart}>
                    Clear Shopping cart
                </button>
            </div>
        <CartTotals/>
    </Wrapper>
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between; 
    margin-top: 2rem;
  }
  .continue{
    text-decoration:none;;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: hsl(22, 31%, 52%);
    color: white;
    border-radius: 0.25rem;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: black;
  }
`
export default CartData
