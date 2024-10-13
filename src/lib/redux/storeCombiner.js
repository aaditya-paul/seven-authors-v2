import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./features/admin";

const rootReducer = combineReducers({
  AdminRedux: authReducer,
  // other reducers can be added here
});

export default rootReducer;
