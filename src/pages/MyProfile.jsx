import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import { Link } from "react-router";
import Loading from "./Loading";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt="User"
            className="w-28 h-28 rounded-full object-cover mb-2"
          />
          <p className="text-lg font-medium">
            {user?.displayName || "No Name"}
          </p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <Link to={"/user/update"}>
          <button type="submit" className="btn btn-primary w-full">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
