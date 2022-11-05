import styled from 'styled-components'
import ProductList from '../components/ProductList'
const Products = () => {
    return <main>
        <Wrapper className='content-page'>
            <div className='section-center'>
                <ProductList/>
            </div>
        </Wrapper>
    </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
    grid-template-columns: 200px 1fr;
}`
export default Products