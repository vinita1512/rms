import React from "react";
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
