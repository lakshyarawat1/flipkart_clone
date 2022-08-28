import { InputBase , Box, styled } from '@mui/material';


const SearchContainer = styled(Box)`
    background : #fff;
    width : 38%;
    border-radius : 2px;
    margin-left : 10px
`;

const InputSearchBase = styled(InputBase)`
    
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase />
        </SearchContainer>
    )
}

export default Search