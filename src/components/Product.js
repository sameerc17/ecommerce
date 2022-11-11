import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Product = ({ image, name, price, id }) => {

    return <Wrapper>
        <div className='container'>
            <img src={image} alt={name} />
            <Link to={`/products/${id}`} className='link'>
                <FaSearch />
            </Link>
        </div>
        <footer>
            <h5>{name}</h5>
            <p>{modified(price)}</p>
        </footer>
    </Wrapper>
}

function modified(price){
  return `₹${price}/-`;
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background: #222;
    border-radius: 0.25rem;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
  }
  .link {
    background-color:#663300;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: #fff;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    background-color:#fff;
    padding: 0.25rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;

  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    color: #55552b;
  }

  footer h5{
      text-transform:capitalize;
      font-size: 14px;
      color: #33331a
  }
`
export default Product
