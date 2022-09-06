import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer.js'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductDetails } from './actions/productActions.js'

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails : getProductDetailsReducer
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store