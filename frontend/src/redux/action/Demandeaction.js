import axios from "axios";
import { GET_DEMANDE } from "../types/DemandeType";

export const getDemandes = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get("/Demande/demandes", config);
    dispatch({ type: GET_DEMANDE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const ajouterDemande = (demande, Navigate) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post("/Demande/ajoutDemande", demande, config);
    Navigate("/Profile");
    dispatch(getDemandes());
  } catch (error) {
    console.log(error);
  }
};
export const deleteDemande = (id) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(`/Demande/deleteDemande/${id}`, config);
    dispatch(getDemandes());
  } catch (error) {
    console.log(error);
  }
};
export const modifierDemande = (id, demandeUpdated) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.put(`/Demande/modifierDemande/${id}`, demandeUpdated, config);
    dispatch(getDemandes());
  } catch (error) {
    console.log(error);
  }
};
