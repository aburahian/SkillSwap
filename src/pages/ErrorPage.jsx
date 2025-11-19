import React from "react";
import { Link } from "react-router";
import "animate.css/animate.min.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-center px-5">
      <div className=" rounded-2xl p-10 md:p-16 animate__animated animate__fadeInDown">
        <h1
          className="animate__animated animate__bounce animate__infinite text-7xl font-bold text-error"
          style={{
            animationDuration: "1.5s", // optional: adjust bounce speed
            animationIterationCount: "infinite",
          }}
        >
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-base-content animate__animated animate__fadeInUp animate__delay-1s">
          Oops! Page Not Found 😢
        </h2>
        <p className="text-gray-500 mt-3 mb-8 max-w-md mx-auto animate__animated animate__fadeInUp animate__delay-2s">
          Looks like the page you're searching for doesn’t exist or might have
          been moved.
        </p>

        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-error to-warning text-white font-semibold hover:scale-105 transition-transform animate__animated animate__pulse animate__infinite"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
