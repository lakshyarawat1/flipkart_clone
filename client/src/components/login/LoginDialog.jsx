import { Dialog, TextField, Typography ,Button, styled} from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react'
import { authenticateSignUp, authenticateLogin } from '../../services/api';

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
    border-radius : 2px;
    margin-left : 30px;
    margin-top : 10px;
    box-shadow : 0 3px 3px 0 #878787;
`

const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat 85% 85%;
    height : 80vh;
    width : 45%;
`

const Heading = styled(Typography)`
    font-size : 28px;
    font-weight :600;
    margin-top : 40px;
    margin-left : 20px;
    color : #fff;
`

const Wrapper = styled(Box)`
    width : 65%;
`

const accountInitialValues = {
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
    userName : '',
    email: '',
    password: '',
    phone: '',

}

const loginInitialValues = {
    userName: '',
    password : ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignUp] = useState(signUpInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false)

    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const toggleSignIn = () => {
        toggleAccount(accountInitialValues.login)
    }
    
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login)
        console.log(response)
        if (response.status === 200) {
            handleClose();
        }
    }

    const onInputChange = (e) => {
        setSignUp({ ...signup, [e.target.name]: e.target.value })
        console.log(signup)
    }

    const signUpUser = async () => {
        let response = await authenticateSignUp(signup)
        if (!response) return;
        handleClose();
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{display : 'flex'}}>
                <Image>
                        <Heading>
                            {account.heading}
                        </Heading>
                        <Typography style={{ margin : 20 , color : '#f9f9f9' }}>
                            {account.subHeading}
                        </Typography>
                    </Image>
                    {
                        account.view === 'login' ?  
                        <Box>
                            <TextField onChange={(e) => onValueChange(e)} name='userName' variant='standard' label='Enter Username' style={{width : '80%',marginTop : 50, marginLeft : 25 }} />
                                {error && <Typography style={{color : 'red'}}>Please enter a valid username and password</Typography>}
                             <TextField onChange={(e) => onValueChange(e)} name='password' variant='standard' label='Enter Password' style={{ width: '80%', marginTop: 30, marginLeft: 25 }} />
                            <Tagline>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Tagline>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                                <Typography style={{ marginTop: 10 , textAlign : 'center' , color : '#878787', fontWeight : 400}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <Typography style={{ fontSize : 14 , textAlign : 'center' , color : '#2874f0', fontWeight :600, marginTop : 90, cursor : 'pointer'}} onClick={()=>toggleSignUp()}>New to Flipkart? Create an account</Typography>
                        </Box>
                    :
                        <Wrapper>
                                <TextField
                                    variant='standard'
                                    name='firstName'
                                    onChange ={ (e)=> onInputChange(e)}
                                    label='Enter First Name'
                                    style={{
                                        width: '70%',
                                        marginTop: 50,
                                        marginLeft: 25
                                    }} />
                                <TextField
                                    variant='standard'
                                    name='lastName'
                                   onChange ={ (e)=> onInputChange(e)}
                                    label='Enter Last Name'
                                    style={{
                                        width: '70%',
                                        marginTop: 20,
                                        marginLeft: 25
                                    }} />
                                <TextField
                                    variant='standard'
                                    onChange ={ (e)=> onInputChange(e)}
                                    label='Enter Username'
                                    name='userName'
                                    style={{
                                        width: '70%',
                                        marginTop: 20,
                                        marginLeft: 25
                                    }} />
                                <TextField
                                    variant='standard'
                                    name='email'
                                    onChange ={ (e)=> onInputChange(e)}
                                    label='Enter Email'
                                    style={{
                                        width: '70%',
                                        marginTop: 20,
                                        marginLeft: 25
                                    }} />
                                <TextField
                                    variant='standard'
                                    name='password'
                                    onChange ={ (e)=> onInputChange(e)}
                                    label='Enter Password'
                                    style={{
                                        width: '70%',
                                        marginTop: 20,
                                        marginLeft: 25
                                    }} />
                                <TextField
                                    variant='standard'
                                    name='phone'
                                    onChange ={ (e)=> onInputChange(e)}
                                    label='Enter Phone'
                                    style={{
                                        width: '70%',
                                        marginTop: 20,
                                        marginLeft: 25
                                    }} />
                            <LoginButton onClick={()=>signUpUser()}>Continue</LoginButton>
                            <Typography style={{ cursor : 'pointer' , fontSize : 14 , textAlign : 'center' , color : '#2874f0', fontWeight :600, marginTop : 50}} onClick={()=>toggleSignIn()} >Already registered ? Login</Typography>
                        </Wrapper> 
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog