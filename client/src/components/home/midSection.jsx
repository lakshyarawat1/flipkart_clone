import { Box } from "@mui/system"
import { imageURL } from "../../constants/data"
import { Grid } from '@mui/material'

const MidSection = () => {
    return (
        <Grid lg={12} md={12} sm={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt='banner' style={{ width: '100%' }} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default MidSection