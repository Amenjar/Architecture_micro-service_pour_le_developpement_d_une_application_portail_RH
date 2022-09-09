import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DemandeReducer from "./DemandeReducer";
import PayslipReducer from "./PayslipReducer";

const rootReducer = combineReducers({
  AuthReducer,
  DemandeReducer,
  PayslipReducer,
});

export default rootReducer;
