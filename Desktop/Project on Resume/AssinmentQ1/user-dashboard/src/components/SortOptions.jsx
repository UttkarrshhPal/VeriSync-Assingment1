import React from "react";

function SortOptions({ sortType, setSortType }) {
  return (
    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
      className="border p-2 rounded mb-4"
    >
      <option value="name">Sort by Name</option>
      <option value="username">Sort by Username</option>
    </select>
  );
}

export default SortOptions;
