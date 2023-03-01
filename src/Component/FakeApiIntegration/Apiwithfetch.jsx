import React, { useEffect, useState } from "react";

function FunictionApi() {
  const [data, setdata] = useState([]);

  console.log(data)

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees").then((data) => {
      data
        .json()
        .then((res) => {
          console.log("res", res);
          setdata(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  const deleteUser = async (id) => {
    try {
      await fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
        method: "DELETE",
      });
      setdata(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_salary: "",
    employee_age: "",
  });

  const editUser = (user) => {
    setEditingUser(user);
    setFormData({
      employee_name: user.employee_name,
      employee_salary: user.employee_salary,
      employee_age: user.employee_age,
    });
  };

  const updateUser = async (id) => {
    try {
      await fetch(`http://dummy.restapiexample.com/api/v1/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=",
        },
      });
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, ...formData } : item
      );
      setdata(updatedData);
      setEditingUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container text-center">
      <h1>This is a Api fetch component</h1>
      <table  className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">employee_name</th>
            <th scope="col">employee_salary</th>
            <th scope="col">employee_age</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>
                {editingUser === item ? (
                  <input
                    type="text"
                    name="employee_name"
                    value={formData.employee_name}
                    onChange={handleChange}
                  />
                ) : (
                  item.employee_name
                )}
              </td>
              <td>
                {editingUser === item ? (
                  <input
                    type="text"
                    name="employee_salary"
                    value={formData.employee_salary}
                    onChange={handleChange}
                  />
                ) : (
                  item.employee_salary
                )}
              </td>
              <td>
                {editingUser === item ? (
                  <input
                    type="text"
                    name="employee_age"
                    value={formData.employee_age}
                    onChange={handleChange}
                  />
                ) : (
                  item.employee_age
                )}
              </td>
              <td>
                {editingUser === item ? (
                  <button className="btn btn-primary" onClick={() => updateUser(item.id)}>Update</button>
                ) : (
                  <button className="btn btn-primary" onClick={() => editUser(item)}>Edit</button>
                )}
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUser(item.id)}>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FunictionApi;
