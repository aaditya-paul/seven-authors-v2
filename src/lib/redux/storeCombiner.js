import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./features/admin";
import toolReducer from "./features/toolbar";
const rootReducer = combineReducers({
  AdminRedux: authReducer,
  toolBar: toolReducer,
  // other reducers can be added here
});

export default rootReducer;
