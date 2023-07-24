import { applyMiddleware, compose, createStore } from "redux";
import allReducers from "./reducers/allReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";


const Store = createStore(allReducers, compose(applyMiddleware(logger, thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default Store;