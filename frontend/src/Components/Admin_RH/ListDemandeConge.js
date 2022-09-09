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
import { getCurrent } from "../../redux/action/Authaction";
import BasicModal from "./Reponse";

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function OrdersConge() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDemandes());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  const rows = useSelector((state) => state.DemandeReducer.demandes);

  return (
    <React.Fragment>
      <Title>List of demands</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>CIN</TableCell>
            <TableCell>Etat</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Periode-request</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .filter((row) => row.type === "leave request")
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.CIN}</TableCell>
                  <TableCell>{row.etat}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.periode}</TableCell>
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
                  <TableCell align="right">
                    <BasicModal row={row} />
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
