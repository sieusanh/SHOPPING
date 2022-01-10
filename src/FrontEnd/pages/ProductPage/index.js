
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import ProductInfo from '../../components/ProductInfo'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Container = styled.div``

function ProductPage() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <ProductInfo />
            <Newsletter />
            <Footer />
        </ Container>
    )
}

export default ProductPage