import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Divider } from "@mui/material";
import { getCurrent, logout } from "../../redux/action/Authaction";
import { Link, useNavigate } from "react-router-dom";

function ListItemsRH() {
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
        <Link to="/ProfileRH/ListcongeRequest">
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="list of leave request" />
          </ListItemButton>
        </Link>
        <Link to="/ProfileRH/ListAvanceRequest">
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="list of salary advance" />
          </ListItemButton>
        </Link>
        <Link to="/ProfileRH/ListPayslipRequest">
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="list of payslip request" />
          </ListItemButton>
        </Link>
        <Link to="/ProfileRH/PayslipCreation">
          <ListItemButton>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Creation Payslip" />
          </ListItemButton>
        </Link>
      </React.Fragment>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListSubheader component="div" inset>
          Saved reports
        </ListSubheader>

        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItemButton>
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
export default ListItemsRH;
