import axios from "axios";
import { GET_PAYLIPS } from "../types/PayslipType";

export const getPayslips = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get("/BulletinDePaie/Payslips", config);
    dispatch({ type: GET_PAYLIPS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const CreatePayslip = (Payslip, Navigate) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post("/BulletinDePaie/addPayslip", Payslip, config);
    dispatch(getPayslips());
    Navigate("/ProfileRH");
  } catch (error) {
    console.log(error);
  }
};
export const deletePayslip = (id, Navigate) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(`/BulletinDePaie/deletePayslip/${id}`, config);

    dispatch(getPayslips());
    Navigate("/Profile");
  } catch (error) {
    console.log(error);
  }
};
