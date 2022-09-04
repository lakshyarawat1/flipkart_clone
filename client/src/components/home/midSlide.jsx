import { Box , styled } from "@mui/system"
import Slide from "./slide"


const Wrapper = styled(Box)`
    display : flex;
`
const Left = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width : '100%'
    }
}))
    


const Right = styled(Box)(({ theme }) => ({
    background : '#fff',
    padding : 10,
    paddingTop  : 40,
    marginTop : 10,
    marginLeft : 10,
    width : '16%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display : 'none'
    }
}));


const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Wrapper>
            <Left>
                <Slide products={products} title='Deal of the day' timer={true} />
            </Left>
            <Right>
                <img src={adURL} alt='ad' style={{ width : 205 }} /> 
            </Right>
        </Wrapper>
    )
}

export default MidSlide