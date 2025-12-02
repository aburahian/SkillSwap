import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-12">

        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#f76305] mb-4">
            About SkillSwap
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            SkillSwap is a platform that connects learners with skilled
            providers across a wide range of fields — from music and languages
            to technology, art, and personal development. Our mission is to make
            learning accessible, flexible, and fun for everyone.
          </p>
        </section>

      
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#f76305] mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow rounded-lg text-center">
              <h3 className="font-semibold mb-2">Discover Skills</h3>
              <p className="text-gray-600">
                Browse a wide variety of skills and find the perfect learning
                opportunity that fits your interests and goals.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-center">
              <h3 className="font-semibold mb-2">Connect with Providers</h3>
              <p className="text-gray-600">
                Reach out directly to experienced providers and book your
                sessions easily through the platform.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-center">
              <h3 className="font-semibold mb-2">Learn & Grow</h3>
              <p className="text-gray-600">
                Attend sessions, gain new skills, and track your learning
                journey — all in one place.
              </p>
            </div>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#f76305] mb-6">
            Why Choose SkillSwap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow rounded-lg text-center">
              <h3 className="font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Learn at your own pace with flexible scheduling options that
                suit your lifestyle.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-center">
              <h3 className="font-semibold mb-2">Verified Providers</h3>
              <p className="text-gray-600">
                Connect with trusted and experienced providers who are ready to
                share their skills.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-center">
              <h3 className="font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">
                Find quality learning opportunities at prices that make sense
                for everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-[#f76305] mb-4">
            Get Started Today!
          </h2>
          <p className="text-gray-700 mb-6">
            Join SkillSwap and start discovering, learning, and growing your
            skills today.
          </p>
          <button className="px-6 py-3 bg-[#f76305] text-white rounded-lg hover:bg-orange-600 transition duration-200">
            Browse Skills
          </button>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
