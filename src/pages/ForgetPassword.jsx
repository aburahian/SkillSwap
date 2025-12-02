import React, { useState, useEffect, use } from "react";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/Auth/AuthContext";

const ForgotPassword = () => {
  const { passwordReset } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        navigate("/auth");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        toast.error(`Failed to send reset email: ${errorMessage}`);
      });

    toast.success("Redirecting to Gmail to reset your password!");
    window.location.href = "https://gmail.google.com";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#f76305] mb-6">
          Reset Your Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mb-4 p-2 border rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/auth")}
            className="text-blue-500 underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
