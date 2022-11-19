import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { FilterContext } from '../context/filters_context'

const FilterList = () => {

    const { filters: {
        text, category, company, color, min_price, max_price, price, shipping },
        updateFilters, clearFilters, unfiltered_products
    } = useContext(FilterContext)

    const categories = getUnique(unfiltered_products, 'category')
    const companies = getUnique(unfiltered_products, 'company')
    const colors = getUnique(unfiltered_products, 'colors')

    return <Wrapper>
        <div className='content'>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='form-control'>
                    <input type='text' name='text' placeholder='search' className='search-input' value={text} onChange={updateFilters} />
                </div>
                <div className='form-control'>
                    <h5>Categories</h5>
                    <div>
                        {categories.map((c, idx) => {
                            return <button key={idx} name='category' onClick={updateFilters} type='button' className={`${category === c.toLowerCase() ? 'active' : null}`}>
                                {c}
                            </button>
                        })}
                    </div>
                </div>
                <div className='form-control'>
                    <h5 >Company</h5>
                    <select name='company' value={company} onChange={updateFilters} className='company'>
                        {companies.map((c, idx) => {
                            return (<option key={idx} value={c}>
                                {c}
                            </option>)
                        })}
                    </select>
                </div>
                <div className='form-control'>
                    <h5>Colours</h5>
                    <div className='colors'>
                        {colors.map((c, idx) => {
                            if (c === 'all') {
                                return <button key={idx} name='color' onClick={updateFilters} data-color='all' className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}>all</button>
                            }
                            return <button key={idx} name='color' className={`${color === c ? 'color-btn active' : 'color-btn'}`} style={{ background: c }} onClick={updateFilters} data-color={c}>
                                {color === c ? <FaCheck /> : null}
                            </button>
                        })}
                    </div>
                </div>
                <div className='form-control'>
                    <h5>Price range</h5>
                    <p className='price'>{modified(price)}</p>
                    <input type='range' name='price' onChange={updateFilters} min={min_price} max={max_price} value={price}/>
                </div>
                <div className='form-control shipping'>
                    <label htmlFor='shipping'>free shipping</label>
                    <input onChange={updateFilters} checked={shipping} type='checkbox' name='shipping'/>
                </div>
            </form>
            <button type='button' className='clear-btn' onClick={clearFilters}>
                {``} clear filters
                </button>
        </div>
    </Wrapper>
}

function modified(price) {
    return `₹${price}/-`;
}

const getUnique = (items, type) => {
    let unique = items.map((item) => item[type])
    if (type === 'colors') {
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 3px;
      font-size: 14px
    }
  }
  .search-input {
    padding: 0.5rem;
    background: hsl(210, 36%, 96%);
    border-radius: 0.25rem;
    border-color: transparent;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 0.05rem;
    color: black;
    cursor: pointer;
  }
  .active {
    border-color: hsl(210, 22%, 49%);
  }
  .company {
    background: hsl(210, 36%, 96%);
    border-radius: 0.25rem;
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: white;
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 14px;
    max-width: 140px;
  }
  .clear-btn {
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: black;
    font-weight:bold;
  }
  .content {
    position: sticky;
    top: 1rem;
  }
`

export default FilterList