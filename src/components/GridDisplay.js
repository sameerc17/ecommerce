import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export const GridDisplay = ({ products }) => {
    return <Wrapper>
        <div className='products-container'>
            {products.map((item)=>{
                return <Product key={item.id} {...item}/>
            })}
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`

