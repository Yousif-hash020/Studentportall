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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-teal-600 mb-2">
          Login to Student Portal
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center mb-6">
          Enter dummy email & password to access dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="info@gmail.com"
              className="w-full border rounded-lg px-3 py-2 sm:py-2.5 md:py-3 outline-teal-500 text-sm sm:text-base"
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
              className="w-full border rounded-lg px-3 py-2 sm:py-2.5 md:py-3 outline-teal-500 text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Extra Options */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Keep me logged in
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-teal-700 transition text-sm sm:text-base"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-xs sm:text-sm">Or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Microsoft login button */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 sm:py-2.5 md:py-3 text-gray-600 hover:bg-gray-100 transition text-sm sm:text-base">
          <img
            src="https://img.icons8.com/color/24/microsoft.png"
            alt="microsoft"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
}

export default Login;
