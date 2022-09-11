import { Typography, Box, styled, Table,  TableBody, TableRow, TableCell } from "@mui/material"
import { LocalOffer } from "@mui/icons-material"

const SmallText = styled(Box)`
    font-size : 14px;
    vertical-align : baseline;
    & > p {
        font-size :16px;
        margin-top : 10px;
    }
`

const StyledBadge = styled(LocalOffer)`
    margin-right : 10px;
    color : #00cc00;
`

const ColumnText = styled(TableRow)`
    font-size : 14px;
    & > td {
        font-size : 14px;
    }
`


const ProductDetail = ({ product }) => {


    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return ( 
        <>
            <Typography>
                {product.title.longTitle}
            </Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>8 Ratings & 1 Reviews
                <Box component='span'> <img src={ fassured } alt='flipkart assured' style={{ width : 77 , marginLeft : 20 }} /> </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize : 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color : '#878787' }}><strike>₹{product.price.mrp} </strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color : '#388e3c' }}>₹{product.price.discount}</Box>
            </Typography>
            <Typography>
                Available Offers
            </Typography>
            <SmallText>
                <Typography>
                    <StyledBadge />
                    Combo OfferBuy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%
                </Typography>
                <Typography>
                    <StyledBadge />
                    Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*
                </Typography>
                <Typography>
                    <StyledBadge />
                    Partner OfferPurchase this product & win a surprise cashback coupon for The Big Billion Days Sale 2022
                </Typography>
                <Typography>
                    <StyledBadge />
                    Bank Offer5% Cashback on Flipkart Axis Bank Card
                </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color : '#878787' }}>
                            Delivery By
                        </TableCell>
                        <TableCell style={{ fontWeight : 600 }}>
                            Delivery By { date.toDateString()} | ₹40
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color : '#878787' }}>
                            Warranty
                        </TableCell>
                        <TableCell>
                            No Warranty
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color : '#878787' }}>
                            Seller
                        </TableCell>
                        <TableCell>
                            <Box component='span' style={{ color : '#2874f0' }}>
                                SuperComNet
                            </Box>
                            <Typography style={{ fontSize : 14, marginTop : 5 }}> View More seller starting from {product.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colspan={ 2 }>
                            <img src={adURL} alt='supercoin' style={{ width : 290 }} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color : '#878787' }}>
                            Descripton
                        </TableCell>
                        <TableCell>
                            {product.description}
                        </TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail