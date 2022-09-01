import { Dialog, TextField, Typography ,Button, styled} from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react'

const Component = styled(Box)`
    height : 80vh;
    width : 90vh;
`

const Tagline = styled(Box)`
    font-size : 12px;
    color : #878787;
    margin-left : 30px;
    margin-top : 20px;
`

const LoginButton = styled(Button)`
    background : #fb641b;
    color : #fff;
    height : 6.5vh;
    width : 80%;
    margin-left : 30px;
    border-radius : 2px;
    margin-top : 10px;
    text-transform :none;
    font-weight : 600;
`

const RequestOTP = styled(Button)`
    text-transform : none;
    height : 6.5vh;
    width : 80%;
    margin-left : 30px;
    margin-top : 10px;
`

const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat 85% 85%;
    height : 80vh;
    width : 45%;
`

const Heading = styled(Typography)`
    font-size : 28px;
    font-weight :600;
    margin-top : 50px;
    margin-left : 30px;
    color : #fff;
`

const accountInitialValues = {
    login: {
        view : 'login'
    },
    signup: {
        view : 'signup'
    }
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)

    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signup)
    }
    
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{display : 'flex'}}>
                <Image>
                        <Heading>
                            Login
                        </Heading>
                        <Typography style={{ margin : 20 , color : '#f9f9f9' }}>
                            Get access to your Orders, Wishlist and Recommendations
                        </Typography>
                    </Image>
                    {
                        account.view === 'login' ?  
                        <Box>
                            <TextField variant='standard' label='Enter Email/Mobile Number' style={{width : '80%',marginTop : 50, marginLeft : 25 }} />
                                <TextField variant='standard' label='Enter Password' style={{ width : '80%' , marginTop : 30, marginLeft : 25}} />
                            <Tagline>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Tagline>
                            <LoginButton>Login</LoginButton>
                                <Typography style={{ marginTop: 10 , textAlign : 'center' , color : '#878787', fontWeight : 400}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <Typography style={{ fontSize : 14 , textAlign : 'center' , color : '#2874f0', fontWeight :600, marginTop : 90}} onClick={()=>toggleSignUp()}>New to Flipkart? Create an account</Typography>
                        </Box>
                    :
                        <Box>
                            <TextField variant='standard' label='Enter First Name' style={{ width: '80%', marginTop: 50, marginLeft: 25 }} />
                            <TextField variant='standard' label='Enter Last Name' style={{ width: '80%', marginTop: 50, marginLeft: 25 }} />
                            <TextField variant='standard' label='Enter Email' style={{width : '80%',marginTop : 50, marginLeft : 25 }} />
                            <TextField variant='standard' label='Enter Password' style={{ width: '80%', marginTop: 50, marginLeft: 25 }} />
                            <TextField variant='standard' label='Enter Phone' style={{width : '80%',marginTop : 50, marginLeft : 25 }} />
                            <LoginButton>Continue</LoginButton>
                            <Typography style={{ fontSize : 14 , textAlign : 'center' , color : '#2874f0', fontWeight :600, marginTop : 90}}>New to Flipkart? Create an account</Typography>
                        </Box> 
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog