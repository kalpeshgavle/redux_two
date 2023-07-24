import { combineReducers } from "redux";
import { getProducts } from "./productReducer";

const allReducers = combineReducers({
    product: getProducts
})

export default allReducers