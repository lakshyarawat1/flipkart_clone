import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
import Search from './search'
import CustomButtons from './customButtons';
import { Link } from 'react-router-dom'


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height : 57px;
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`

const SubHeading = styled(Typography)`
    font-size : 11px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    
})

const header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt='logo' style={{ width: '75px' }} />
                    <Link to={'/'} style={{ textDecoration : 'none' }}>
                        <SubHeading style={{ color : '#fff' }}>
                            Explore&nbsp;
                            <Box component='span' style={{ color: `#ffe500` }}>Plus&nbsp;
                                <PlusImage src={subURL} alt='sub-logo'  />
                            </Box>
                        </SubHeading>
                    </Link>
                </Component>
                <Search />
                <Box>
                    <CustomButtons />
                </Box>
            </Toolbar>
        </StyledHeader>
    )
}

export default header;