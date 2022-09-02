import { Box, styled } from '@mui/material'

import { useEffect } from 'react'
import NavBar from './Navbar'
import Banner from './banner'
import { getProducts } from '../../redux/actions/productActions.js'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './slide'

const Container = styled(Box)`
    padding : 20px 10px 10px 10px;
    background : #f2f2f2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts)

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
                <Slide products={products} />
            </Container>
        </>
    )
}

export default Home