import { Button, Box, Typography , styled , Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useState } from 'react'
import LoginDialog from '../login/LoginDialog'
import { Link } from 'react-router-dom'
import { useSelector  } from 'react-redux'


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

const Container = styled(Link)`
    display : flex;
    text-decoration : none;
    color : inherit;
`

const CustomButtons = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true)
    }

    const { cartItems } = useSelector(state => state.cart)

    return (
        <Wrapper>
            <LoginButton variant="contained" style={{ marginLeft : 25 }} onClick={() => openDialog()} >
                Login
            </LoginButton>
            <Typography style={{ marginLeft : 40 }}>
                Become a Seller
            </Typography>
            <Typography style={{ marginLeft : 40 }}>
                More
            </Typography>
            <Container to="/cart">
                <ShoppingCart style={{ marginLeft: 50 }} />
                <Badge badgeContent={cartItems?.length} color='secondary'  />
                <Typography>
                    Cart
                </Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;