import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background : #fff;
    width : 34%;
    border-radius : 2px;
    margin-left : 10px;
    display : flex;
`;

const SearchIconWrapper = styled(Box)`
    color : blue;
`

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase
            placeholder ='Search for products, brands and more'
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search