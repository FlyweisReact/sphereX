/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/pages/Customers/Customers";
import Cat from "./components/pages/Cat/Cat";
import Terms from "./components/pages/Terms&Condition/Terms";
import Privacy from "./components/pages/PrivacyPolicy/Privacy";
import Help from "./components/pages/Help/Help";
import Labour from "./components/pages/Labours/Labour";
import GenerateId from "./components/pages/GenerateId/GenerateId";
import NotifyLabour from "./components/pages/Notifications/NotifyLabour";
import NotifyCustomer from "./components/pages/Notifications/NotifyCustomer";
import Payment from "./components/pages/Payment/Payment";
import AllTask from "./components/pages/AllTask";
import Invoice from "./components/pages/Invoice";
import Active from "./components/pages/Active";
import CustomerTransaction from "./components/CustomerTransaction";
import LabTrans from "./components/pages/LabTrans";
import ViewLocation from "./components/pages/Labours/ViewLocation";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/allTask" element={<AllTask />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/generateId" element={<GenerateId />} />
        <Route path="/Notice/Labour" element={<NotifyLabour />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path='/Notice/Customer' element={<NotifyCustomer />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/activeLabour" element={<Active />} />
        <Route path="/trans/:id" element={<CustomerTransaction />} />
        <Route path="/lab/:id" element={<LabTrans />} />
        <Route path="/location/:id" element={<ViewLocation />} />
      </Routes>
    </>
  );
}

export default App;
