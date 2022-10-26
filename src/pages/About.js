import React from 'react'
import styled from 'styled-components'
import image from '../assets/logo192.png'
const About = () => {
    return <Wrapper className='section section-center'>
        <img src={image} alt='About' />
        <article>
            <div className='title'>
                <h2>About Us</h2>
                <div className='underline'></div>
            </div>
            <p>
            This company was founded in 2020 as an online furniture store. We started off with a small team of just 8 people. Today we are over 600 employees and considered one of the leading players in the e-commerce space. Our idea is to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them. </p>
        </article>
    </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: #000;
    font-size: 18px;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default About