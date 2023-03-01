import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import nextId from "react-id-generator";

function StudentData() {
  const [studentName, setstudentName] = useState("");
  const [studentAge, setstudentAge] = useState("");
  const [className, setclassName] = useState("");
  const [classTime, setclassTime] = useState("");

  const userId = nextId();

  const Data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: userId,
      Name: studentName,
      Age: studentAge,
      ClassName: className,
      classTime: classTime,
    };
    dispatch({ type: "ADD_STUDENT", payload: newStudent });
    setstudentName("");
    setstudentAge("");
    setclassName(" ");
    setclassTime(" ");
  };

  return (
    <>
      <form className="student_form" onSubmit={handleSubmit}>
        <input
          type='string'
          value={studentName}
          onChange={(e) => setstudentName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          type='number'
          value={studentAge}
          onChange={(e) => setstudentAge(Number(e.target.value))}
          placeholder="Enter Your age"
        />
        <input
          type='string'
          value={className}
          onChange={(e) => setclassName(e.target.value)}
          placeholder="Teacher Name"
        />
        <input
          type='string'
          value={classTime}
          onChange={(e) => setclassTime(e.target.value)}
          placeholder="Class Timing"
        />
        <button type="submit">Click</button>
      </form>

      <div className="container text-center">
        <h1>Student List</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">student id</th>
              <th scope="col">student Name</th>
              <th scope="col">student Age</th>
              <th scope="col"> Class Teacher Name</th>
              <th scope="col">Class Timing</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.ClassName}</td>
                  <td>{item.classTime}</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_CLASS", payload: item })
                      }
                    >
                      Delete Your Class
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentData;
