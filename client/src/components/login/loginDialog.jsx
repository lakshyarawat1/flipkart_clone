import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import  { useState } from 'react'

const Component = styled(Box)`
    height : 80vh;
    width : 100vh;
`

const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width : 30%;
    padding : 45px 35px;
    & > p {
        color : #fff;
        font-size : 17px;
    }
    & > h5 {
        color : #fff;
        font-weight : 600;
        font-size : 28px;
    }
`

const Wrapper = styled(Box)`
    display :flex;
    flex-direction : column;
    padding : 25px 35px;
    flex : 1;
    & > div & > p & > button {
        margin-top : 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform : none;
    background : #fb641b;
    color : #fff;
    height : 48px;
    border-radius : 2px;
`

const RequestOTP = styled(Button)`
    text-transform : none;
    color : #2874f0;
    background : #fff;
    height : 48px;
    border-radius : 2px;
    font-weight : 600;  
    box-shadow : 0 2px 4px 0 rgb(0 0 0 /20%) 
`

const Text = styled(Typography)`
    font-size : 12px;
    color : #878787;
`

const CreateAccount = styled(Typography)`
    font-size : 14px;
    text-align : center;
    color : #2874f0;
    font-weight : 600;
    curser : pointer
`

const accountInitialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading : 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here!`,
        subHeading : 'Sign up with your mobile number to get started'
    }
}

const signUpInitialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone : ''
}

const LoginDialog = ({ open, setOpen }) => {
     
    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValue.login)
    }

    const toggleSignUp = () => {
        toggleAccount(accountInitialValue.signup)
    }

    const onInputChange = (e) => {
        setSignUp({ ...signup,  })
    }

    const [account, toggleAccount] = useState(accountInitialValue.login) 
    const [signup, setSignUp ] = useState(signUpInitialValues)
    
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx : { maxWidth : 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height : '100%' }}>
                    <Image>
                        <Typography variant='h5'>
                            {account.heading}
                        </Typography>
                        <Typography style={{marginTop : 20}}>
                            {account.subHeading}
                        </Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' label='Enter Email/Mobile number' style={{ marginTop: 20 }} />
                            <TextField variant='standard' label='Enter Password' style={{ marginTop: 20 }} />
                            <Text style={{ marginTop: 25 }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton style={{ marginTop: 20 }}>Login</LoginButton>
                            <Typography style={{ marginTop: 20, textAlign: 'center' }}>OR</Typography>
                            <RequestOTP style={{ marginTop: 20 }}>Request OTP</RequestOTP>
                            <CreateAccount style={{ marginTop: 120 }}  onClick={()=> toggleSignUp()} >New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                    :
                        <Wrapper>
                                <TextField variant='standard' name='firstName' label='Enter Firstname' style={{ marginTop: 20}} onChange = {(e) => onInputChange(e)} />
                                <TextField variant='standard' name='lastName' label='Enter Lastname' style={{ marginTop: 20}} onChange = {(e) => onInputChange(e)}  />
                                <TextField variant='standard' name='userName' label='Enter Username' style={{ marginTop: 20}} onChange = {(e) => onInputChange(e)} />
                                <TextField variant='standard' name='email' label='Enter Email' style={{ marginTop: 20}} onChange = {(e) => onInputChange(e)} />
                                <TextField variant='standard' name='password' label='Enter Password' style={{ marginTop: 20}} onChange = {(e) => onInputChange(e)} />
                                <TextField variant='standard' name='phone' label='Enter Phone' style={{ marginTop: 20}} onChange = {(e) => onInputChange(e)} />
                                <LoginButton>Continue</LoginButton>
                                <RequestOTP style={{ marginTop : 20 }}>Existing User ?</RequestOTP>
                        </Wrapper> 
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog