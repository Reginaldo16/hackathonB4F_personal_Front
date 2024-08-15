import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DashboardHome from "./Pages/Dashboard/Dashboard";
import Clients from "./Pages/Clients/Clients";
import Profile from "./Pages/profile/Profile";
import AppointmentForm from "./components/Appointment/Appointment";
import LoginForm from "./components/LoginForm/LoginForm";

export const route = createBrowserRouter([
  { path: "/", element: <LoginForm /> },
  { path: "/home", element: <Home /> },
  { path: "/clients", element: <Clients /> },
  { path: "/dashboard", element: <DashboardHome /> },
  { path: "/profile", element: <Profile /> },
  { path: "/appointment", element: <AppointmentForm /> },
]);
