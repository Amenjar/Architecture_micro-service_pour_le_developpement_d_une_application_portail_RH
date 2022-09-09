import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../SignIn.css";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { ajouterDemande } from "../../redux/action/Demandeaction";
import { getCurrent } from "../../redux/action/Authaction";

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

export default function DemandeConge() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const user = useSelector((state) => state.AuthReducer.user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [name, setName] = useState(user.name);
  const [CIN, setCIN] = useState(user.cin);
  const [type, setType] = useState("leave request");
  const [aquisation, setAquisation] = useState("");
  const [periode, setPeriode] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{ marginTop: "170px" }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            leave request
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
                  onChange={(e) => setCIN(e.target.value)}
                  value={CIN}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="type"
                  name="type"
                  autoComplete="type"
                  value={type}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="aquisation"
                  label="aquisation"
                  type="aquisation"
                  id="aquisation"
                  onChange={(e) => setAquisation(e.target.value)}
                  value={aquisation}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="leave request"
                  label="leave request"
                  name="leave request"
                  autoComplete="leave request"
                  onChange={(e) => setPeriode(e.target.value)}
                  value={periode}
                />
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
                    ajouterDemande(
                      {
                        name,
                        CIN,
                        type,
                        aquisation,
                        periode,
                      },
                      Navigate
                    )
                  );
                }}
              >
                leave request
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
