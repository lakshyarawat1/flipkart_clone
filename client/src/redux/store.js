import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getProductsReducer } from './reducers/productReducer.js'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    getProducts: getProductsReducer
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store