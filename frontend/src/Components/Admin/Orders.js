import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployers, getEmployers } from "../../redux/action/Authaction";
import { Avatar, IconButton } from "@mui/material";
import BasicModal from "./ModalEmployer";

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  // const rows = [
  //   {
  //     name: "amen",
  //     cin: "11111",
  //     email: "amen@gmail.com",
  //     periode_conge: "22",
  //     role: "Emplyée",
  //     salaire: "2000",
  //   },
  // ];
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getEmployers());
  }, [dispatch]);
  const rows = useSelector((state) => state.AuthReducer.Employers);
  return (
    <React.Fragment>
      <Title>List of Employers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>CIN</TableCell>
            <TableCell>periode_congé</TableCell>
            <TableCell>role</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .filter((row) => row.role !== "Admin App")
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell align="Right">
                    <Avatar alt={row.name} src={row.picture} />
                  </TableCell>

                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.cin}</TableCell>
                  <TableCell>{row.periode_conge}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell align="right">{`$${row.salaire}`}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(deleteEmployers(row._id))}
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
