import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Login from '../../components/Login'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Container = styled.div``

function LoginPage() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Login />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default LoginPage