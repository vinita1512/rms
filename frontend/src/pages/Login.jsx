import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState(""); // To store email or mobile number
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine if the input is an email or mobile number
    const isEmail = emailOrMobile.includes("@");

    // You can add more validation logic here if needed

    // Prepare data for authentication
    const loginData = {
      username: emailOrMobile, // Either email or mobile
      password,
    };

    // Simulate a login API request
    console.log("Logging in with:", loginData);
    // Here you would send loginData to your authentication endpoint

    // After successful login, redirect user (replace this with your actual navigation logic)
    // navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded shadow-md"
      >
        <h4 className="text-2xl font-bold mb-6 text-center">LOGIN FORM</h4>

        {/* Email or Mobile Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="emailOrMobile">
            Email or Mobile No.
          </label>
          <input
            type="text"
            autoFocus
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="emailOrMobile"
            placeholder="Enter Your Email or Mobile No."
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="password"
            placeholder="Enter Your Password"
            required
          />
        </div>

        {/* Forgot Password Link */}
        <div className="mb-4">
          <button
            type="button"
            className="text-indigo-600 hover:underline"
            onClick={() => navigate("/forgotPassword")}
          >
            Forgot Password
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
