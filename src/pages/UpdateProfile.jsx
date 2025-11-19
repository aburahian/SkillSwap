import React, { use, useState } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loading from "./Loading";

const UpdateProfile = () => {
  const { user, setUser, updateProfileInfo, setLoading,loading } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();
  if(loading){
  return <Loading></Loading>
}
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !photoURL) {
      toast.error("Name and Photo URL cannot be empty");
      return;
    }

    updateProfileInfo({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        setLoading(false);
        toast.success("Profile updated successfully!");
        navigate("/user");
      })
      .catch((err) => toast.error("Update failed: " + err.message));
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">Update My Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
