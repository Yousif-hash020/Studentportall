import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login action → bas navigate karna hai
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-2">
          Login to Student Portal
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter dummy email & password to access dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="info@gmail.com"
              className="w-full border rounded-lg px-3 py-2 outline-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 outline-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Keep me logged in
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">Or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Microsoft login button */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-gray-600 hover:bg-gray-100 transition">
          <img
            src="https://img.icons8.com/color/24/microsoft.png"
            alt="microsoft"
          />
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
}

export default Login;
