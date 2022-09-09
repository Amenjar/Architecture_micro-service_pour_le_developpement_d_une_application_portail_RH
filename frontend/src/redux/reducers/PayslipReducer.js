import { GET_PAYLIPS } from "../types/PayslipType";

const initialState = {
  Payslips: null,
};

const PayslipReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PAYLIPS:
      return { ...state, Payslips: payload.ListOfPayslip };

    default:
      return state;
  }
};
export default PayslipReducer;
