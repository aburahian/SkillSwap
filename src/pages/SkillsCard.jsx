import React from "react";
import { useNavigate } from "react-router";

const SkillsCard = ({ skill }) => {
  const { image, skillName, rating, price, skillId } = skill;
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 ">
      <img src={image} alt={skillName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {skillName}
        </h2>
        <div className="flex items-center justify-between mb-3">
          <span className="text-yellow-500 font-medium">⭐ {rating}</span>
          <span className="text-indigo-600 font-semibold">${price}</span>
        </div>
        <button
          onClick={() => navigate(`/service/skill/${skillId}`)}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SkillsCard;
