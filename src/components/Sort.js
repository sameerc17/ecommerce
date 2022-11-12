import React, { useContext } from 'react'
import { FilterContext } from '../context/filters_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { Tooltip } from '@mui/material'
const Sort = () => {
    const { filtered_products: products, grid_display, setGrid, setList } = useContext(FilterContext)
    return <Wrapper>
        <div className='btn-container'>
            <Tooltip title='Switch to grid Display'>
                <button type='button' className={`${grid_display ? 'active' : null}`} onClick={setGrid}>
                    <BsFillGridFill />
                </button>
            </Tooltip>
            <Tooltip title='Switch to list Display'>
                <button type='button' className={`${grid_display ? null : 'active'}`} onClick={setList}>
                    <BsList />
                </button>
            </Tooltip>
        </div>
        <p>{products.length} products found</p>
        <hr />
        <form>
            <label htmlFor='sort'>sort by </label>
            <select name='sort' id='sort' className='sort-input'>
                <option value='price-lowest'>price (lowest)</option>
                <option value='price-highest'>price (highest)</option>
                <option value='name-a'>name (a-z)</option>
                <option value='name-z'>name (z-a)</option>
            </select>
        </form>
    </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: black;
      color: black;
      width: 1.5rem;
      border-radius: 0.25rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: black;
      color: white;
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 14px;
    text-transform: capitalize;
    padding: 0.1rem 0.25rem;
  }
  label {
    font-size: 14px;
    text-transform: capitalize;
  }
`

export default Sort
