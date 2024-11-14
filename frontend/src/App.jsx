import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <div className="min-h-screen">
      
      <div className="container mx-auto p-4">
        <h2>Welcome to the Resort Management System</h2>
      </div>
    </div> */}

      <BrowserRouter>
      <ToastContainer />
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
