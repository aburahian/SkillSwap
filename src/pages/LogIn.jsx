import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/Auth/AuthContext";
import toast from "react-hot-toast";

const LogIn = () => {
  const { createUserByGoogle, setUser, signInWithEmail, setLoading } =
    use(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    signInWithEmail(email, password)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        setError("");
        toast.success("Registration successful! 🎉");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
        setError("Registration failed. Please try again.");
      });
  };
  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email first.");
    }
    navigate("/auth/forgot-password", { state: { email } });
  };
  const handleGoogleSignUp = () => {
    setLoading(true);
    createUserByGoogle()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        setError("");
        toast.success("Registration successful! 🎉");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="card bg-base-100 w-full m-auto max-w-sm my-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-3xl font-bold">Login now!</h3>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input  pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link link-hover text-blue-500"
              >
                Forgot password?
              </button>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        {error ? <p className="text-red-500">{error}</p> : ""}
        <p>
          New to our Website? Please{" "}
          <Link className="text-blue-400 underline" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
