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
import { modifierDemande } from "../../redux/action/Demandeaction";

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

  const [etat, setEtat] = useState(row.etat);
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
            Edit Demand
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <InputLabel
                      id="demo-simple-select-standard-label"
                      style={{ marginTop: "20px", marginRight: "155px" }}
                    >
                      etat
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="role"
                      style={{ width: "200px" }}
                      onChange={(e) => setEtat(e.target.value)}
                      value={etat}
                    >
                      <MenuItem value="en attente">en attente</MenuItem>
                      <MenuItem value={"validé"}>validé</MenuItem>
                      <MenuItem value={"non validé"}>non validé</MenuItem>
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
                    modifierDemande(row._id, {
                      etat,
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
