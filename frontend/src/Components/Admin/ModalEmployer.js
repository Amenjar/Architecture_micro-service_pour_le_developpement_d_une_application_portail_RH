import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { editEmployers } from "../../redux/action/Authaction";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ row }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [name, setName] = useState(row.name);
  const [cin, setCin] = useState(row.cin);
  const [email, setEmail] = useState(row.email);
  const [password, setPassword] = useState(row.password);
  const [description, setDescription] = useState(row.description);
  const [salaire, setSalaire] = useState(row.salaire);
  const [periode_conge, setPeriode_conge] = useState(row.periode_conge);
  const [picture, setPicture] = useState(row.picture);
  const [role, setRole] = useState(row.role);
  const dispatch = useDispatch();

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon></EditIcon>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Compte
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="CIN"
                    label="CIN"
                    name="CIN"
                    autoComplete="family-name"
                    onChange={(e) => setCin(e.target.value)}
                    value={cin}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="description"
                    name="description"
                    autoComplete="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="salaire"
                    label="salaire"
                    name="salaire"
                    autoComplete="salaire"
                    onChange={(e) => setSalaire(e.target.value)}
                    value={salaire}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="periode_conge"
                    label="periode_conge"
                    name="periode_conge"
                    autoComplete="periode_conge"
                    onChange={(e) => setPeriode_conge(e.target.value)}
                    value={periode_conge}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="picture"
                    label="picture"
                    name="picture"
                    autoComplete="picture"
                    onChange={(e) => setPicture(e.target.value)}
                    value={picture}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <InputLabel
                      id="demo-simple-select-standard-label"
                      style={{ marginTop: "20px", marginRight: "155px" }}
                    >
                      role
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="role"
                      style={{ width: "200px" }}
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={"Admin RH"}>Admin RH</MenuItem>
                      <MenuItem value={"Employée"}>Employée</MenuItem>
                    </Select>
                  </Typography>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ background: "#573b8a" }}
                onClick={(e) => {
                  e.preventDefault();

                  dispatch(
                    editEmployers(row._id, {
                      name,
                      cin,
                      email,
                      password,
                      description,
                      periode_conge,
                      salaire,
                      picture,
                      role,
                    })
                  );
                  handleClose();
                }}
              >
                Edit Compte
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
