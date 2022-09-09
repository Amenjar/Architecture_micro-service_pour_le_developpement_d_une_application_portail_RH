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

import "../SignIn.css";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { CreatePayslip } from "../../redux/action/PayslipAction";

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

export default function CreationPayslip() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [NomEtPrénom, setNomEtPrénom] = useState("");
  const [CIN, setCIN] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [NetPayer, setNetPayer] = useState("");
  const [salaireNetImposable, setsalaireNetImposable] = useState("");
  const [PlafondSS, setPlafondSS] = useState("");
  const [Emploi, setEmploi] = useState("");

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
            Créer Payslip
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
                  name="Nom Et Prénom"
                  required
                  fullWidth
                  id="Nom Et Prénom"
                  label="Nom Et Prénom"
                  autoFocus
                  onChange={(e) => setNomEtPrénom(e.target.value)}
                  value={NomEtPrénom}
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
                  id="Address"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                  onChange={(e) => setAdresse(e.target.value)}
                  value={Adresse}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="NetPayer"
                  label="NetPayer"
                  type="NetPayer"
                  id="NetPayer"
                  onChange={(e) => setNetPayer(e.target.value)}
                  value={NetPayer}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="salaireNetImposable"
                  label="salaireNetImposable"
                  name="salaireNetImposable"
                  autoComplete="salaireNetImposable"
                  onChange={(e) => setsalaireNetImposable(e.target.value)}
                  value={salaireNetImposable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="PlafondSS"
                  label="PlafondSS"
                  name="PlafondSS"
                  autoComplete="PlafondSS"
                  onChange={(e) => setPlafondSS(e.target.value)}
                  value={PlafondSS}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Emploi"
                  label="Emploi"
                  name="Emploi"
                  autoComplete="Emploi"
                  onChange={(e) => setEmploi(e.target.value)}
                  value={Emploi}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: "#573b8a" }}
              onClick={() =>
                dispatch(
                  CreatePayslip(
                    {
                      NomEtPrénom,
                      CIN,
                      Adresse,
                      NetPayer,
                      salaireNetImposable,
                      PlafondSS,
                      Emploi,
                    },
                    Navigate
                  )
                )
              }
            >
              Créer Payslip
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
