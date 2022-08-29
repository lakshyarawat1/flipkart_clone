import { Box , styled, Typography } from '@mui/material'
import { navData }  from '../../constants/data'

const Wrapper = styled(Box)`
    display : flex;
    margin : 55px 52px 0 52px;
    justify-content : space-between;
`

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
        <Wrapper>
            {
                navData.map(data => (
                    <Container>
                        <img src={ data.url } alt='nav' style = {{ width : 64 }} />
                        <Text>
                            { data.text }
                        </Text>
                    </Container>
                ))
            }
        </Wrapper>
    )
}

export default NavBar;