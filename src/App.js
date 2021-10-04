import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const githubUsers = await axios.get("https://api.github.com/users");
    setUsers(githubUsers.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
};

export default App;
