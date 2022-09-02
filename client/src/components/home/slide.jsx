import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown'
import { Box, Typography, styled } from '@mui/material'

const Component = styled(Box)`
    margin-top : 10px;
    background : #fff;
`

const Headline = styled(Box)`
    padding : 15px 20px;
    display : flex;
`

const responsive = {
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 5
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1
                }
                };

const Slide = ({ products }) => {

    const renderer = ({ hours, minutes, seconds }) => {
        return 
    }

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Component>
            <Headline>
                <Typography>
                    Deals of the day
                </Typography>
                <Box>
                    <img src={timerURL} alt='timer' />
                </Box>
                <Countdown date={ Date.now() + 5.04e+7} renderer={renderer} />
            </Headline>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                centerMode={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <img src={product.url} alt='product' />
                    ))
                }
                </Carousel>
            </Component>
    )
}

export default Slide