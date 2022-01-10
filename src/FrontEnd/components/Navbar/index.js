
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'

import { Container, Wrapper, Left, Language, SearchContainer, SearchInput, 
         Center, Logo, Right, MenuItem } from './StyledComponents'

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchInput placeholder='Search' />
                        <Search style={{color: 'gray', fontSize: '16px'}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar