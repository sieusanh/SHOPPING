
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Cart from '../../components/Cart'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Container = styled.div``

function CartPage() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Cart />
            <Newsletter />
            <Footer />
        </ Container>
    )
}

export default CartPage