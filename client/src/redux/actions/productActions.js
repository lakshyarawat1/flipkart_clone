import axios from 'axios'
import * as actionTypes from '../constants/productConstants';

const url = 'http://localhost:4000'

export const getProducts = () => async (dispatch) => {
    try{
        const { data } = await axios.get(`${url}/products`);
        console.log(data)
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload : data });
    } catch (error) {
        console.log('Error while calling getProducts api', error)
        dispatch({type : actionTypes.GET_PRODUCT_FAIL , payload : error.message})
    }
}

export const getProductDetails = () => async (dispatch) => {
    try {

    } catch (error) {
        
    }
}