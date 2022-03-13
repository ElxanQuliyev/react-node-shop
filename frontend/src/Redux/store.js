import { createStore, combineReducers, applyMiddleware } from "redux";
import { productDetailsReducers, productListReducers } from "./Reducers/ProductReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Reducers/CartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails:productDetailsReducers,
  cart:cartReducer
});

const cartItemFromLocalStorage = localStorage.getItem("cartItems") ? 
JSON.parse(localStorage.getItem("cartItems")):[]
const initialState = {
  cart:{
    cartItems:cartItemFromLocalStorage
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
