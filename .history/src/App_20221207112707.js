/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/pages/Customers/Customers";
import Service from "./components/pages/Services/Service";
import Inventory from "./components/pages/Inventory/Inventory";
import Cat from "./components/pages/Cat/Cat";
import Tlt from "./components/pages/TLT/Tlt";
import AddTLT from "./components/pages/Value/AddTLT";
import Terms from "./components/pages/Terms&Condition/Terms";
import Privacy from "./components/pages/PrivacyPolicy/Privacy";
import Help from "./components/pages/Help/Help";
import Events from "./components/pages/Events/Events";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/event" element={<Events />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
