import { Box, styled } from '@mui/material'

import NavBar from './Navbar'
import Banner from './banner'

const Container = styled(Box)`
    padding : 20px 10px 10px 10px;
    background : #f2f2f2;
`

const Home = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Banner />
            </Container>
        </>
    )
}

export default Home