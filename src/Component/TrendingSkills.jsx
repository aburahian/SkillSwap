import React from "react";
import "animate.css";

const TrendingSkills = () => {
  return (
    <section className="py-16 bg-white w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-6  animate__animated animate__bounce animate__infinite">
          Trending Skills
        </h2>

        <p className=" mb-12 animate__animated animate__fadeInUp animate__delay-1s">
          Explore the most popular skills our learners are mastering right now.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 ">💻</div>
            <h3 className="text-xl font-semibold">Frontend Development</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🎸</div>
            <h3 className="text-xl font-semibold">Guitar Lessons</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🧘‍♀️</div>
            <h3 className="text-xl font-semibold">Yoga & Fitness</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">📸</div>
            <h3 className="text-xl font-semibold">Photography</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold">English Speaking</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🍳</div>
            <h3 className="text-xl font-semibold">Cooking Quick Meals</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSkills;
