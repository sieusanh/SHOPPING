import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import ProductList from '../../components/ProductList'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Container = styled.div``


function ProductListPage() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <ProductList />
            <Newsletter />
            <Footer />
        </ Container>
    )
}

export default ProductListPage