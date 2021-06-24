import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import watchGetUserDataAsyn from "../modules/prakashRedux/screen/homePage/homeSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, logger, sagaMiddleware];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(watchGetUserDataAsyn);

export default store;
