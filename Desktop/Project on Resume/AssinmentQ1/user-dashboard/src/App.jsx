import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";
import SearchBar from "./components/SearchBar";
import SortOptions from "./components/SortOptions";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a[sortType].localeCompare(b[sortType]));

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onViewDetails={() => setSelectedUser(user)}
          />
        ))}
      </div>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
