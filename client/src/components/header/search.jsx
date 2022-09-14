import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom'

const SearchContainer = styled(Box)`
    background : #fff;
    width : 34%;
    border-radius : 2px; 
    margin-left : 10px;
    display : flex;
    height : 38px;
    margin-bottom : 10px;
`;

const SearchIconWrapper = styled(Box)`
    color : #2874f0;
    padding : 5px;
    padding-top : 8px;
    display:flex;
`

const ListWrapper = styled(List)`
    position : absolute;
    width : 33%;
    margin-top : 35px;
`

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : 14px;
`

const Search = () => {

    const [text, setText] = useState('');

    const { products }  = useSelector(state => state.getProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem style={{ background: '#fff', color: '#000', paddingBottom: 15 }}>
                                    <Link to={`/product/${product.id}`}  onClick={() => setText(``)} style={{ textDecoration : 'none', color : 'inherit' }} >
                                    {
                                        product.title.longTitle
                                    }
                                    </Link>
                                </ListItem>
                            ))
                        }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search