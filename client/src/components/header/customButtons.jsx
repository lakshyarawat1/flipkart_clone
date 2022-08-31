import { Button, Box, Typography , styled } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

const Wrapper = styled(Box)`
    display : flex;
`

const LoginButton = styled(Button)`
    background : #fff;
    color : #2874f0;
    height : 30px;
    width : 125px;
    text-transform : none;
    font-weight : 600;
    border-radius : 0;
    box-shadow : 0;
`

const Container = styled(Box)`
    display : flex;
`

const CustomButtons = () => {


    return (
        <Wrapper>
            <LoginButton variant="contained" style={{ marginLeft : 25 }}>
                Login
            </LoginButton>
            <Typography style={{ marginLeft : 40 }}>
                Become a Seller
            </Typography>
            <Typography style={{ marginLeft : 40 }}>
                More
            </Typography>
            <Container>
                <ShoppingCart style={{ marginLeft : 50 }} />
                <Typography>
                    Cart
                </Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButtons;