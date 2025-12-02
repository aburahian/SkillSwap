import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-[#f76305] font-bold mb-6">How It Works</h2>
        <p className="text-gray-600 mb-12">
          SkillSwap makes learning new skills simple, fast, and fun.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Browse Skills</h3>
            <p className="text-gray-500 text-center">
              Explore a wide range of skills offered by verified providers.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Choose & Book</h3>
            <p className="text-gray-500 text-center">
              Pick a skill, check available slots, and book your session
              instantly.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
            <p className="text-gray-500 text-center">
              Join the session, practice, and gain valuable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
