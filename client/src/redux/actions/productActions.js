import axios from "axios";
import * as actionTypes from "../constants/productConstants";

const url = "https://flipkart-clone-rho-sable.vercel.app";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`, {
      cache: "force-cache",
    });
    console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error while calling getProducts api", error);
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.messsage,
    });
  }
};
