import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Divider } from "@mui/material";
import { getCurrent, logout } from "../../redux/action/Authaction";
import { Link, useNavigate } from "react-router-dom";

function ListItemsEmployer() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  const user = useSelector((state) => state.AuthReducer.user);

  return (
    <div>
      <React.Fragment>
        <ListItemButton>
          <ListItemIcon>
            <Avatar alt={user.name} src={user.picture} />
          </ListItemIcon>
          <ListItemText primary={`${user.name}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={`leave : ${user.periode_conge}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={`salary :${user.salaire}`} />
        </ListItemButton>
        <Link to="/Profile/Periode">
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="leave request" />
          </ListItemButton>
        </Link>
        <Link to="/Profile/avance">
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="salary advance request" />
          </ListItemButton>
        </Link>
        <Link to="/Profile/PayslipRequest">
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="payslip request" />
          </ListItemButton>
        </Link>
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="check your demand" />
        </ListItemButton>
      </React.Fragment>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListSubheader component="div" inset>
          Saved reports
        </ListSubheader>
        <Link to="/Profile/payslip">
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Download payslip" />
          </ListItemButton>
        </Link>

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Log out"
            onClick={() => dispatch(logout(Navigate))}
          />
        </ListItemButton>
      </React.Fragment>
    </div>
  );
}
export default ListItemsEmployer;
