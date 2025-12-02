import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loading from "./Loading";

const SkillDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/skills")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (loading) return <Loading />;

  const skill = data.find((item) => item._id === id);

  if (!skill)
    return <p className="text-center mt-10 text-red-500">Skill not found</p>;

  return (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className="max-w-3xl w-full rounded-2xl overflow-hidden">
        {/* Skill Image */}
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        {/* Skill Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{skill.skillName}</h1>
          <p className="text-gray-500 italic">{skill.category}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="font-semibold text-gray-700">Provider</p>
              <p>{skill.providerName}</p>
              <p className="text-sm text-gray-500">{skill.providerEmail}</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-700">Price</p>
              <p className="text-[#f76305] font-bold">${skill.price}</p>
              <p className="font-semibold text-gray-700 mt-2">Rating</p>
              <p className="text-yellow-500 font-semibold">{skill.rating} ⭐</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{skill.description}</p>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Slots Available:{" "}
              <span className="font-semibold">{skill.slotsAvailable}</span>
            </p>
            <Link to="/service/book-session">
              <button className="px-6 py-2 bg-[#f76305] text-white rounded-xl hover:bg-orange-600 transition">
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
