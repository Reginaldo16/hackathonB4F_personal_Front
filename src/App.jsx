import { RouterProvider } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/header.js/Header";
import Clients from "./Pages/Clients/Clients";
import { route } from "./routes";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
