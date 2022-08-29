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
    color : #2874f0;
    padding : 5px;
    padding-top : 8px;
`

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
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