import { Box, Typography, styled, Button } from '@mui/material'
import { addEllipses } from '../../utils/common-utils'
import ButtonGroup from './buttonGroups'

const Component = styled(Box)`
    border-top : 1px solid #f0f0f0;
    display : flex;
`

const LeftComponent = styled(Box)`
    margin : 20px;
    display : flex;
    flex-direction : column;
`

const SmallText = styled(Typography)`
    color : #878787;
    font-size : 15px;
    margin-top : 10px;
`


const RemoveButton = styled(Button)`
    margin-top : 20px;
    font-size : 16px;
    font-weight : 600;
    color : #000;
`

const CartItem = ({ item }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return (
        <>
            <Component>
                <LeftComponent>
                    <img src={item.url} alt='product' style={{ width: 110 }} />
                    <ButtonGroup />
                </LeftComponent>
                <Box style={{ margin : 20 }}>
                    <Typography>
                        {addEllipses(item.title.longTitle)}
                    </Typography>
                    <SmallText>
                        Seller : RetailNet 
                        <Box component='span'>
                            <img src={fassured} alt='flipkart' style={{ width : 70, marginLeft : 10 }} />
                        </Box>
                    </SmallText>
                    <Typography style={{ margin : '20px 0' }}>
                        <Box component='span' style={{ fontSize : 18, fontWeight : 600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color : '#878787' }}><strike>₹{item.price.mrp} </strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color : '#388e3c' }}>₹{item.price.discount}</Box>
                    </Typography>
                    <RemoveButton>
                        Remove
                    </RemoveButton>
                </Box>
            </Component>
        </>
    )
}

export default CartItem