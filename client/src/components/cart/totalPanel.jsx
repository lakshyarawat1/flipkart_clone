import {styled, Box, Typography } from "@mui/material"


const Header = styled(Box)`
    padding : 15px 24px;
    background : #fff;
    border-bottom : 1px solid #f0f0f0;
`

const Heading = styled(Typography)`
    color : #878787;
`

const Container = styled(Box)`
    padding : 15px 24px;
    background : #fff;
    & > p {
        margin-bottom :20px;
        font-size : 14px;
    }
    & > h6 {
        margin-bottom : 20px;
    }
`

const Price = styled(Box)`
    float : right;
`

const Discount = styled(Typography)`
    color : green;
    font-weight : 500;
`

const TotalPanel = ({ cartItems }) => {
    return (
        <Box>
            <Header>
                <Heading>
                    PRICE DETAILS
                </Heading>
            </Header>
            <Container>
                <Typography>
                    Price ({cartItems?.length} items)
                    <Price component='span'>
                        ₹100
                    </Price>
                    </Typography>
                <Typography>
                    Discount
                    <Price component='span'>
                        -₹100
                    </Price>
                    </Typography>
                <Typography>
                    Delivery Charges
                <Price component='span'>
                    ₹100
                    </Price>
                    </Typography>
                <Typography variant='h6'>
                    Total Amount
                    <Price component='span'>
                        ₹100
                    </Price>
                </Typography>
                <Discount>
                    You will save 
                    <Price component='span'>₹100</Price>
                </Discount>
            </Container>
        </Box>
    )
}

export default TotalPanel