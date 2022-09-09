import { GET_DEMANDE } from "../types/DemandeType";

const initialState = {
  demandes: null,
};

const DemandeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DEMANDE:
      return { ...state, demandes: payload.listofDemande };

    default:
      return state;
  }
};
export default DemandeReducer;
