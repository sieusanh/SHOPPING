import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Register from '../../components/Register'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Container = styled.div``

function RegisterPage() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Register />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default RegisterPage