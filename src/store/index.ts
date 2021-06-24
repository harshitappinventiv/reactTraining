import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk, logger];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
