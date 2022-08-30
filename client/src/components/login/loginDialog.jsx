import { Dialog , Box , TextField, Typography ,Button ,styled } from '@mui/material'

const Component = styled(Box)`
    height : 75vh;
    width : 90vh;
`

const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height : 100%;
    width : 40%;
    padding : 45px 35px;
    & > p {
        color : #fff;
    }
    & > h5 {
        color : #fff;
        font-weight : 600;
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

const LoginDialog = ({ open, setOpen }) => {
     
    const handleClose = () => {
        setOpen(false)
    }
    
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx : { maxWidth : 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height : '100%' }}>
                    <Image>
                        <Typography variant='h5'>
                            Login
                        </Typography>
                        <Typography style={{marginTop : 20}}>
                            Get access to your Orders, Wishlist and Recommendations
                        </Typography>
                    </Image>
                    <Wrapper>
                        <TextField variant='standard' label='Enter Email/Mobile number' />
                        <TextField variant='standard' label='Enter Password' />
                        <Text style={{marginTop : 20}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton style={{marginTop : 20}}>Login</LoginButton>
                        <Typography style= {{marginTop : 20, textAlign : 'center'}}>OR</Typography>
                        <RequestOTP style={{marginTop : 20}}>Request OTP</RequestOTP>
                        <CreateAccount style= {{marginTop :20}}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog