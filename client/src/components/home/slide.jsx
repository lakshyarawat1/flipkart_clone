import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown'
import { Box, Typography, styled, Button, Divider } from '@mui/material'

const Component = styled(Box)`
    margin-top : 10px;
    background : #fff;
`

const Headline = styled(Box)`
    padding : 15px 20px;
    display : flex;
    margin-right : 20px;
`
const Timer = styled(Box)`
    margin-left : 20px;
    display : flex;
`

const Image = styled('img')({
    width: 'auto',
    height : 150
})

const TitleText = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    letter-spacing : 1px;
    padding-top : 20px;
`

const DiscountText = styled(Typography)`
    color : #388e3c;
    font-size : 14px;
    letter-spacing : 1px;
    padding-top : 7px;
`

const TaglineText = styled(Typography)`
    font-size : 14px;
    color : #212121;
    padding-top :7px;
    opacity : 0.6;
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

const Slide = ({ products, title, timer }) => {

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant='span'>{ hours } : {minutes} : { seconds}  Left</Box>
    }

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Component>
            <Headline>
                <Typography style={{ fontWeight : 600, fontSize : 24 }}>
                    {title}
                </Typography>
                {timer &&
                     <Timer>
                    <img src={timerURL} alt='timer' style={{ marginRight : 20 }}/>
                     <Countdown date={ Date.now() + 5.04e+7} renderer={renderer} />
                </Timer>
               }
               <Button variant='contained' style={{ marginLeft : 'auto', textTransform : 'none', letterSpacing : 2 }} >View All</Button>
            </Headline>
            <Divider />
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
                        <Box textAlign='center' style={{ padding : '25px 15px' }}>
                            <Image src={product.url} alt='product' />
                            <TitleText> {product.title.shortTitle} </TitleText>
                            <DiscountText> {product.discount} </DiscountText>
                            <TaglineText> {product.tagline} </TaglineText>
                        </Box>
                    ))
                }
                </Carousel>
            </Component>
    )
}

export default Slide