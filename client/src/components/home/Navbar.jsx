import { Box , styled, Typography } from '@mui/material'
import { navData }  from '../../constants/data'

const Wrapper = styled(Box)(({theme}) => ({
    display : 'flex',
    margin: '55px 52px 0 52px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        margin : 0
    }
}))

const Container = styled(Box)`
    padding : 12px 8px;
    text-align : center;
`

const Text = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    font-family : inherit;
`

const NavBar = () => {

    return (
        <Box style={{  backgroundColor : '#fff' }}>
            <Wrapper>
                {
                    navData.map(data => (
                        <Container key={data.id}>
                            <img src={ data.url } alt='nav' style = {{ width : 64 }} />
                            <Text>
                                { data.text }
                            </Text>
                        </Container>
                    ))
                }
            </Wrapper>
        </Box>
    )
}

export default NavBar;