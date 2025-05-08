import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
  
      const { token, user } = res.data;
  
      // Kiểm tra nếu không có token trả về
      if (!token) {
        alert("Authentication failed. Please try again.");
        return;
      }
  
      const { name, role } = user;
  
      // Lưu thông tin vào localStorage
      localStorage.setItem("token", token);  // Lưu token để dùng trong các request sau
      localStorage.setItem("userName", name); // Lưu tên người dùng
      localStorage.setItem("role", role);     // Lưu role (admin hoặc user)
  
      alert("Login successful!");
  
      // Điều hướng theo role
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert("Login failed. Please check your email or password.");
    }
  };
  

  return (
    <div className="text-white min-h-screen flex flex-col">
      <hr className="mx-[100px] border-gray-300" />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-md border border-black">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-black font-medium underline">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
