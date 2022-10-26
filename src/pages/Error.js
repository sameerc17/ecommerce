import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error =()=>{
    return <Wrapper className='error-page'>
        <section>
            <h1>404</h1>
            <h3>Sorry this page doesn't exist</h3>
            <Link to='' className='btn'>
                Back home
            </Link>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
  background: rgb(238, 222, 207);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`


export default Error