import { useEffect, useState } from "react";
import { useParams } from "react-router"
import styled from 'styled-components'
import { SingleProduct_url as url } from "../data/url";
import ProductGallery from '../components/ProductGallery'
import Rating from "../components/Rating";
import AddToCart from "../components/AddToCart";

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function getProductData() {
            const response = await fetch(`${url}${id}`)
            const data = await response.json()
            console.log(data);
            if (data) {
                setProduct(data)
            }
        }
        getProductData()
    }, [id])

    const { name, description, stars, reviews, price, company, images , category,stock} = product

    return <main>
        <Wrapper className='section section-center'>
            <div className="product-center">
                <ProductGallery images={images} />
                <div className="information">
                    <h3 className="title">{name}</h3>
                    <Rating stars={stars} reviews={reviews} />
                    <p className="price">{modified(price)}</p>
                    <p className="info">{description}</p>
                    <hr />
                    <p className="details">
                        <span>Availabilty:</span>
                        {stock>0?'In stock':'Out of stock'}
                    </p>
                    <p className="details">
                        <span>Category:</span>
                        {category}
                    </p>
                    <p className="details">
                        <span>Company:</span>
                        {company}
                    </p>
                    <hr/>
                    {stock>0 && <AddToCart product={product}/>}
                    
                </div>
            </div>
        </Wrapper>
    </main>
}

function modified(price) {
    return `₹${price}/-`;
}

const Wrapper = styled.main`

  .product-center {
    padding: 0 5rem;
    display: grid;
    gap: 4rem;
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr;
    // align-items: center;
  }
  .title{
        font-size:32px;
        text-transform:capitalize;
        text-align:left;
        font-family: Roboto,Arial,sans-serif;
    }
  .info {
      font-size: 14px;
      font-family: Roboto,Arial,sans-serif;
      margin-bottom: 15px;
    }
    .information{
        margin-top:2rem;
    }
    .price{
        margin: 2.5px 0;
        font-size:18px
    }
    .details{
        margin-top: 10px;
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        span {
            font-weight: 700;
        }
    } 
  }

`

export default SingleProduct