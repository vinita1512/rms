import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UserLayout from "./components/Layout/UserLayout";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
