import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";

const ProtectedLayout = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ProtectedLayout;
