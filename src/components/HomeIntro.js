import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../assets/logo192.png'

const HomeIntro = () => {
    return <Wrapper className='section section-center'>
        <article>
            <div className='title'>
                <h2>Designing your homes with beautiful interiors</h2>
                <div className='underline'></div>
            </div>
            <p>
                Our company was founded in 2020 as an online furniture store. We started off with a small team of just 8 people. Today we are over 600 employees and considered one of the leading players in the e-commerce space. Our idea is to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them.
            </p>
            <Link to='/products' className='btn btn1'>
                Shop now
            </Link>
        </article>
        <img src={image} alt='About' />
    </Wrapper>
}

const Wrapper = styled.section`
  place-items: center;
  margin-top:1rem;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  img {
    margin: auto auto;
    display: block;
    border-radius: 0.25rem
    height: 100;
    width: 50;
    margin-left:0
  }
  p {
    line-height: 2;
    max-width: 18rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: #000;
    font-size: 15px;
    padding-bottom:1.5rem;
  }
  .title {
    max-width: 18rem;
    margin: 0 auto;
    text-align: left;
    font-size:17px;
  }
  .underline {
    margin-left: 0;
  }
  .btn1{
    font-size: 0.85rem;
    color:#fff;
  }
`

export default HomeIntro;