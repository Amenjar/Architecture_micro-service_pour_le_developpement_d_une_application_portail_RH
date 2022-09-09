import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
import "../SignIn.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action/Authaction";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function CreationCompte() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [name, setName] = useState("");
  const [cin, setCin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [salaire, setSalaire] = useState("");
  const [periode_conge, setPeriode_conge] = useState("");
  const [picture, setPicture] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Créer Compte
          </Typography>
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
                  register(
                    {
                      name,
                      cin,
                      email,
                      password,
                      description,
                      salaire,
                      periode_conge,
                      picture,
                      role,
                    },
                    Navigate
                  )
                );
              }}
            >
              Créer Compte
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
