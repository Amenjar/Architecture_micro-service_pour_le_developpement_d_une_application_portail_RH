import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteDemande, getDemandes } from "../../redux/action/Demandeaction";
import { editEmployers, getCurrent } from "../../redux/action/Authaction";

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function OrdersEmployer() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDemandes());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const user = useSelector((state) => state.AuthReducer.user);
  const rows = useSelector((state) => state.DemandeReducer.demandes);

  React.useEffect(() => {
    rows &&
      rows
        .filter((demande) => demande.userId === user._id)
        .map((demande) =>
          demande.periode !== undefined && demande.etat === "validé"
            ? dispatch(
                editEmployers(user._id, {
                  periode_conge: user.periode_conge - demande.periode,
                })
              )
            : null
        );
  }, [dispatch]);
  React.useEffect(() => {
    rows &&
      rows
        .filter((demande) => demande.userId === user._id)
        .map((demande) =>
          demande.avance !== undefined && demande.etat === "validé"
            ? dispatch(
                editEmployers(user._id, {
                  salaire: user.salaire - demande.avance,
                })
              )
            : null
        );
  }, [dispatch]);

  return (
    <React.Fragment>
      <Title>List of demands</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>type</TableCell>
            <TableCell>Etat</TableCell>
            <TableCell>Periode</TableCell>
            <TableCell>Avance-Salaire</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .filter((row) => row.userId === user._id)
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.etat}</TableCell>
                  <TableCell>
                    {row.periode === undefined ? <h3>Null</h3> : row.periode}
                  </TableCell>
                  <TableCell>
                    {row.avance === undefined ? <h3>Null</h3> : row.avance}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        dispatch(deleteDemande(row._id));
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
