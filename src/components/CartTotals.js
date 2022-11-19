import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart_context'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useContext(CartContext)
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal:<span>{modified(total_amount)}</span>
          </h5>
          <p>
            shipping fee :<span>{modified(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total:<span>{modified(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to='/checkout' className='btn'>
          Proceed to checkout
        </Link>
      </div>
    </Wrapper>
  )
}

function modified (price) {
  return `₹${price}/-`
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid hsl(212, 33%, 89%);
    border-radius: 0.25rem;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  justify-content: flex-end;

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
