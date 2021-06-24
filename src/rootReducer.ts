import { combineReducers } from "redux";
import { counterReducer } from "./modules/prakashRedux/screen/counter/reducer";

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
