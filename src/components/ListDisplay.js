import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ListDisplay = ({ products }) => {
    return <Wrapper>
        {products.map((item) => {
            const { image, name, price, id, description } = item;
            return <article key={id}>
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p className='price'>{modified(price)}</p>
                    <p className='desc'>{`${description.substring(0, 200)}...`}</p>
                    <Link className='list-link' to={`/products/${id}`}><button>DETAILS</button></Link>

                </div>

            </article>
        })}
    </Wrapper>
}

function modified(price) {
    return `₹${price}/-`;
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  h4 {
    text-transform:capitalize;
  }
  .price {
    font-size:14px
  }
  .desc {
    max-width: 30rem;
    margin-bottom: 0.25rem;
    font-size: 12px;
    letter-spacing: 1px
  }
  button {
    font-weight: bold;
    font-size: 12px;
    padding: 0.25rem 0.25rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    border-color: transparent;
    background: hsl(22, 31%, 52%);
    color: hsl(22, 31%, 88%);

  }
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
  }
`
