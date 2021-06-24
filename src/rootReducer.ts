import { combineReducers } from "redux";
import { counterReducer } from "./modules/prakashRedux/screen/counter/reducer";
import { getUserReducer } from "./modules/prakashRedux/screen/homePage/reducer";

const rootReducer = combineReducers({ counterReducer, getUserReducer });

export default rootReducer;
