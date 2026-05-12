import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../api/auth.api";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.token);

      alert("Login successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white w-[400px] p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 mb-6">
          Login to your account
        </p>

        <form
          className="space-y-4"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;