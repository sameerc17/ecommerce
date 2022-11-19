import React, { useContext, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { CartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
    const {addToCart}=useContext(CartContext)
    const { id, stock, colors } = product
    const [colour, setColour] = useState(colors[0]);
    const [amount,setAmount]=useState(1)

    const increase=()=>{
        setAmount((old)=>{
            let temp=old+1;
            if(temp>stock)
            temp=stock;
            return temp;
        })
    }

    const decrease=()=>{
        setAmount((old)=>{
            let temp=old-1;
            if(temp<1)
            temp=1;
            return temp;
        })
    }

    return <Wrapper>
        <div className='colors'>
            <span>Colors: </span>
            <div>
                {colors.map((color, index) => {
                    return <button key={index} onClick={()=>setColour(color)} className={`${colour===color?'color-btn active':'color-btn'}`} style={{background:color}}>
                        {colour===color?<FaCheck/>:null}
                    </button>
                })}
            </div>
        </div>
        <div className='btn-container'>
            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
            <Link to='/cart' className='btn' onClick={()=>addToCart(id,colour,amount,product)}>
                Add to Cart
            </Link>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: white;
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 0.5rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
