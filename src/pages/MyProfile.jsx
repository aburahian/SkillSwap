import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import { Link } from "react-router";
import Loading from "./Loading";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  // Example skills (replace with actual user skills)
  const skills = user?.skills || [
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Panel */}
        <div className="flex flex-col items-center p-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-extrabold mt-4">{user?.displayName || "No Name"}</h2>
          <p className="text-gray-500 mt-1">{user?.email}</p>

          {/* Stats */}
          <div className="flex justify-around w-full mt-6 text-gray-500">
            <div className="text-center">
              <span className="font-bold text-lg">{skills.length}</span>
              <p className="text-sm">Skills</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-lg">{user?.activeSwaps || 0}</span>
              <p className="text-sm">Active Swaps</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-lg">{user?.rating || "N/A"}</span>
              <p className="text-sm">Rating</p>
            </div>
          </div>

          <Link to="/user/update" className="mt-6 w-full">
            <button className="w-full py-3 bg-[#f76305] rounded-xl font-bold text-white hover:bg-orange-600 transition duration-200">
              Update Profile
            </button>
          </Link>
        </div>

        {/* Skills Panel */}
        <div className="md:col-span-2 p-6">
          <h2 className="text-2xl font-extrabold mb-6">Your Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-4 rounded-xl">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <p className="text-gray-500">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
