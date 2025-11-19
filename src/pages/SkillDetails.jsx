import React, { use } from "react";
import { Link, useParams } from "react-router";
import Loading from "./Loading";
import { DataContext } from "../Context/Data/DataContext";

const SkillDetails = () => {
  const { id } = useParams();
  const { data, loading } = use(DataContext);

  if (loading) return <Loading></Loading>;

  const skill = data.find((item) => item.skillId === parseInt(id));

  if (!skill)
    return <p className="text-center mt-10 text-red-500">Skill not found</p>;
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {skill.skillName}
          </h1>
          <p className="text-gray-600 mb-4 italic">{skill.category}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold text-gray-700">Provider:</p>
              <p>{skill.providerName}</p>
              <p className="text-sm text-gray-500">{skill.providerEmail}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Price:</p>
              <p>${skill.price}</p>
              <p className="font-semibold text-gray-700 mt-2">Rating:</p>
              <p>{skill.rating} ⭐</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {skill.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Slots Available:{" "}
              <span className="font-semibold">{skill.slotsAvailable}</span>
            </p>
            <Link to={"/service/book-session"}>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Book Session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
