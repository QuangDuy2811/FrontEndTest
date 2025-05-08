import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    date: ""
  });
  const [error, setError] = useState(""); // To store error message
  const navigate = useNavigate(); // For navigating to the login page after successful registration

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending request to register
      await axios.post('http://localhost:5000/api/register', formData);
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error(error);
      // Check if the error response contains specific message like email already exists
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Set error message from server response
      } else {
        setError("Registration failed! Please try again.");
      }
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <hr className="mx-[100px] border-gray-300" />
      <main className="flex-grow flex items-start justify-center px-4 pt-12">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-md border border-black">
          <h2 className="text-3xl font-bold mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your address"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">Date of Birth</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Register
            </button>
          </form>

          {/* Link to Login */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-medium underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
