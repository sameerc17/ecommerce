import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
      <h4>
          &copy; {new Date().getFullYear()}
          <span> Company Name</span>
      </h4>
      <h4>All rights reserved</h4>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: 4rem;
  width:100%;
  // position: absolute;
  bottom:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222;
  text-align: center;
  span {
    color: #ffecb3;
  }
  h4 {
    color: #fff;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
