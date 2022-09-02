import { Box, styled } from '@mui/material'

import { useEffect } from 'react'
import NavBar from './Navbar'
import Banner from './banner'
import { getProducts } from '../../redux/actions/productActions.js'
import { useDispatch } from 'react-redux'

const Container = styled(Box)`
    padding : 20px 10px 10px 10px;
    background : #f2f2f2;
`

const Home = () => {

    const dispatch = useDispatch();

    useEffect(
        () => {
        dispatch(getProducts())
    }, [dispatch])
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