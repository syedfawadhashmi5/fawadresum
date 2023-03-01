import React, { useState, useEffect } from "react";
import axios from "axios";

function ApiIntegration() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const editUser = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
  };

  const updateUser = async (id) => {
    try {
      await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        formData
      );
      setUsers(
        users.map((user) => (user.id === id ? { ...user, ...formData } : user))
      );
      setEditingUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>ApiIntegration</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editingUser === user ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUser === user ? (
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUser === user ? (
                  <button onClick={() => updateUser(user.id)}>Update</button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => editUser(user)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiIntegration;
