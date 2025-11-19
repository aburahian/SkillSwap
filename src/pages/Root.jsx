import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import HeroSlider from "../Component/HeroSlider";
import { Outlet } from "react-router";
import TopProviders from "../Component/TopProviders";
import HowItWorks from "../Component/HowItWorks";
import TrendingSkills from "../Component/TrendingSkills";

const Root = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <Navbar></Navbar>
      <HeroSlider></HeroSlider>
      <Outlet></Outlet>
      <TopProviders></TopProviders>
      <HowItWorks></HowItWorks>
      <TrendingSkills></TrendingSkills>
      <Footer></Footer>
    </div>
  );
};

export default Root;
