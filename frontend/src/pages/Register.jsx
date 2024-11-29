import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (example for mobile number and answer)
    if (!/^\d{10}$/.test(mobileNo)) {
      toast.error('Please enter a valid 10-digit mobile number.', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    if (!answer.trim()) {
      toast.error('Please answer the security question.', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    // Prepare data to send to the backend
    const userData = {
      name,
      email,
      password,
      mobileNo,
      answer,
    };

    try {
      // Make a POST request to the backend
      const response = await axios.post('http://localhost:5000/api/users/register', userData);

      // If registration is successful, show success toast and navigate to login page
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token in localStorage
        toast.success('Registration successful! You can now login.', {
          position: 'top-center',  // Using string instead of toast.POSITION.TOP_CENTER
          autoClose: 5000,
        });
        // Redirect to login page after successful registration
        navigate('/login');
      }
    } catch (error) {
      // Handle errors (e.g., user already exists)
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Something went wrong! Please try again later.', {
          position: 'top-center',  // Using string instead of toast.POSITION.TOP_CENTER
          autoClose: 5000,
        });
      } else {
        toast.error('Something went wrong! Please try again later.', {
          position: 'top-center',  // Using string instead of toast.POSITION.TOP_CENTER
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded shadow-md"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">REGISTER FORM</h4>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mobileNo">
              Mobile No.
            </label>
            <input
              id="mobileNo"
              type="text"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Your Mobile No."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="answer">
              What is your Favourite Sport
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Example: Cricket, Football, Hockey, Tennis"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            REGISTER
          </button>
        </form>
      </div>

      {/* Toast container to display the notifications */}
      <ToastContainer />
    </>
  );
};

export default Register;
