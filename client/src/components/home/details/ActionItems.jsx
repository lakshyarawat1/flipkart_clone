import { ShoppingCart, FlashOn  } from '@mui/icons-material'
import {Box, Button, styled} from '@mui/material'


const LeftContainer = styled(Box)`
    min-width : 40%;
    padding : 40px 0 0 80px
`

const Image = styled('img')({
    padding: '15px',
    height: '30%',
    width : '90%'
})

const StyledButton = styled(Button)`
    width : 48%;
    height : 50px;
    border-radius : 2px;

`

const ActionItem = ({ product } ) => {
    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px',  border: '1px solid #f0f0f0', width : '90%'}}>
                <Image src={product.detailUrl} alt='failure' />
            </Box>
            <StyledButton variant='contained' style={{ marginRight : 10, background : '#ff9f00' }}>
                <ShoppingCart />
                Add to Cart
            </StyledButton>
            <StyledButton variant='contained' style={{ background : '#fb541b' }}>
                <FlashOn />
                Buy Now
            </StyledButton>
        </LeftContainer>
    )
}

export default ActionItem