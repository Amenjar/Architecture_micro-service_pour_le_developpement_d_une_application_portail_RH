import {
  FAIL,
  GET_CURRENT,
  GET_EMPLOYERS,
  LOGIN,
  LOGOUT,
} from "../types/AuthType";

const initialState = {
  user: null,
  errors: null,
  auth: false,
  fail: null,
  Employers: null,
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.found, auth: true, errors: null };
    case GET_CURRENT:
      return { ...state, user: payload, auth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, auth: false };
    case GET_EMPLOYERS:
      return { ...state, Employers: payload.Employers, errors: null };

    case FAIL:
      return { ...state, fail: payload.errors };
    default:
      return state;
  }
};

export default AuthReducer;
