import axios from "axios";
import {
  FAIL,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  GET_EMPLOYERS,
} from "../types/AuthType";

export const register = (newUser, Navigate) => async (dispatch) => {
  try {
    await axios.post("/Auth/signUp", newUser);
    dispatch(getEmployers());
    Navigate("/ProfileAdmin");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (user, Navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/Auth/signIn", user);

    dispatch({ type: LOGIN, payload: res.data });
    if (res.data.found.role === "Admin App") {
      Navigate("/ProfileAdmin");
    } else if (res.data.found.role === "Admin RH") {
      Navigate("/ProfileRH");
    } else {
      Navigate("/Profile");
    }
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = (Navigate) => {
  Navigate("/");
  return {
    type: LOGOUT,
  };
};
export const getCurrent = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const res = await axios.get("/Auth/current", config);
    console.log(res.data);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};

export const getEmployers = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get("/Auth/AdminRH", config);
    dispatch({ type: GET_EMPLOYERS, payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmployers = (id) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(`/Auth/deleteEmployers/${id}`, config);
    dispatch(getEmployers());
  } catch (error) {
    console.log("error");
  }
};
export const editEmployers = (id, updateUser) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.put(`/Auth/updateEmployers/${id}`, updateUser, config);
    dispatch(getEmployers());
  } catch (error) {
    console.log(error);
  }
};
