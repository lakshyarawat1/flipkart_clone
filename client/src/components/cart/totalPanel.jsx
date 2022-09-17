import { Box, Typography } from "@mui/material"


const TotalPanel = ({ cartItems }) => {
    return (
        <Box>
            <Box>
                <Typography>
                    PRICE DETAILS
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Price ({cartItems?.length} items)
                    <Box component='span'>
                        ₹100
                    </Box>
                    </Typography>
                <Typography>
                    Discount
                    <Box component='span'>
                        -₹100
                    </Box>
                    </Typography>
                <Typography>
                    Delivery Charges
                <Box component='span'>
                    ₹100
                    </Box>
                    </Typography>
                <Typography>
                    Total Amount
                    <Box component='span'>
                        ₹100
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}

export default TotalPanel