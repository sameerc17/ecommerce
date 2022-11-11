import React, { useState } from 'react'
import styled from 'styled-components'

const ProductGallery = ({ images=[{}]}) => {
    const [image, setImage] = useState(images[0])
    return <Wrapper>
        <img src={image.url} alt="image" className='main' />
        <div className='gallery'>
            {images.map((img, index) => {
                return (
                    <img 
                    src={img.url} 
                    alt={img.filename} 
                    key={index} 
                    onClick={() => setImage(images[index])} 
                    className={`${img.url===image.url?'active':null}`}
                    />
                )
            })}
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 300px;
  }
  img {
    height: 75px;
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 80px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px hsl(22, 31%, 52%);
  }
`

export default ProductGallery
