import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signupUser } from "../api/auth.api";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signupUser(formData);

      alert("Signup successful");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white w-[400px] p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 mb-6">
          Signup for the platform
        </p>

        <form
          className="space-y-4"
          onSubmit={handleSignup}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

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
            Signup
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;