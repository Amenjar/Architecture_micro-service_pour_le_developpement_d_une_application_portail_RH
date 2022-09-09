import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRouteAdmin from "./Components/Private/PrivateRouteAdmin";
import Dashboard from "./Components/Admin/Dashbord";
import SignIn from "./Components/SignIn";
import CreationCompte from "./Components/Admin/CreationCompte";
import PrivateRouteRH from "./Components/Private/PrivateRouteRH";
import PrivateRoute from "./Components/Private/PrivateRoute";

import DashboardRH from "./Components/Admin_RH/DashbordRH";
import DashboardEmployer from "./Components/Employer/DashbordEmployer";
import Payslip from "./Components/Employer/Payslip";
import DemandeAvance from "./Components/Employer/DemandeAvance";
import DemandeConge from "./Components/Employer/DemandeConge";
import DemandePayslip from "./Components/Employer/DemandePayslip";
import OrdersPayslip from "./Components/Admin_RH/ListDemandePayslip";
import OrdersAvance from "./Components/Admin_RH/ListDemandeAvance";
import OrdersConge from "./Components/Admin_RH/ListDemandeConge";
import CreationPayslip from "./Components/Admin_RH/CreationPayslip";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn></SignIn>} />
        <Route
          path="/ProfileAdmin"
          element={
            <PrivateRouteAdmin>
              <Dashboard></Dashboard>
            </PrivateRouteAdmin>
          }
        />
        <Route path="/ProfileAdmin/addCompte" element={<CreationCompte />} />
        <Route
          path="/ProfileRH"
          element={
            <PrivateRouteRH>
              <DashboardRH></DashboardRH>
            </PrivateRouteRH>
          }
        />
        <Route
          path="/ProfileRH/ListPayslipRequest"
          element={<OrdersPayslip></OrdersPayslip>}
        />
        <Route
          path="/ProfileRH/ListAvanceRequest"
          element={<OrdersAvance></OrdersAvance>}
        />
        <Route
          path="/ProfileRH/ListcongeRequest"
          element={<OrdersConge></OrdersConge>}
        />
        <Route
          path="/ProfileRH/PayslipCreation"
          element={<CreationPayslip></CreationPayslip>}
        />
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <DashboardEmployer></DashboardEmployer>
            </PrivateRoute>
          }
        />
        <Route path="/Profile/payslip" element={<Payslip></Payslip>} />
        <Route
          path="/Profile/avance"
          element={<DemandeAvance></DemandeAvance>}
        />
        <Route
          path="/Profile/Periode"
          element={<DemandeConge></DemandeConge>}
        />
        <Route
          path="/Profile/PayslipRequest"
          element={<DemandePayslip></DemandePayslip>}
        />
      </Routes>
    </div>
  );
}

export default App;
