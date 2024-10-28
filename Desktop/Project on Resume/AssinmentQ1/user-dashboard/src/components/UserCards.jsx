import React from "react";

function UserCard({ user, onViewDetails }) {
  return (
    <div className="border p-4 rounded shadow hover:bg-gray-200 transition duration-200">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <button
        onClick={onViewDetails}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        View Details
      </button>
    </div>
  );
}

export default UserCard;
