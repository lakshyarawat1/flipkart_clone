import { Box, Button, Typography ,styled } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/loginDialog'
import { useState } from 'react'

const Wrapper = styled(Box)`
    display:flex;
    margin : 0 3% auto;
    & > button, & > p, & > div {
        margin-right : 40px;
        font-size : 15px;
        align-items : center;
        font-weight : 600;
    }
`

const Container = styled(Box)`
    display : flex;
    margin-bottom : 12px;
`

const LoginButton = styled(Button)`
    color : #2874f0;
    background : #fff;
    text-transform : none;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow : none;
    font-weight : 600;
    margin-bottom : 15px;
    height : 32px;
    margin-top : 7px;
`


const CustomButtons = () => {

    const [ open, setOpen ] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            <LoginButton varient="contained" onClick={() => openDialog()}>
                Login
            </LoginButton>

            <Typography style={{ marginTop : 12, width : 150 }}>
                Become a Seller
            </Typography>
            <Typography style={{ marginTop: 12, marginRight : 54 }}>More</Typography>

            <Container>
                <ShoppingCart />
                <Typography style={{ fontWeight : 600 }}>
                    Cart
                </Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;