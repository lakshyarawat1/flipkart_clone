import { Box , styled } from "@mui/system"
import Slide from "./slide"


const Wrapper = styled(Box)`
    display : flex;
`
const Left = styled(Box)`
    width : 83%
`

const Right = styled(Box)`
    background : #fff;
    padding : 10px;
    padding-top  : 40px;
    margin-top : 10px;
    margin-left : 10px;
    width : 16%;
    text-align:center;
`


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