import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loading from "./Loading";

const UpdateProfile = () => {
  const { user, setUser, updateProfileInfo, loading, setLoading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState(user?.skills || []);
  const navigate = useNavigate();

  if (loading) return <Loading />;

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !photoURL) {
      toast.error("Name and Photo URL cannot be empty");
      return;
    }

    updateProfileInfo({ displayName: name, photoURL, skills })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL, skills });
        setLoading(false);
        toast.success("Profile updated successfully!");
        navigate("/user");
      })
      .catch((err) => toast.error("Update failed: " + err.message));
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className="w-full max-w-md p-6">
        <h2 className="text-3xl font-extrabold text-[#f76305] mb-6 text-center">Update My Profile</h2>

        {/* Profile Preview */}
        {photoURL && (
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img src={photoURL} alt="Profile Preview" className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
            />
          </div>

          {/* Skills Input */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Skills</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add a skill"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-3 bg-[#f76305] text-white rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Add
              </button>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <div key={idx} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full flex items-center gap-2">
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-red-500 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#f76305] text-white font-bold rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
