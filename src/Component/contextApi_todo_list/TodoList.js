import React, { useState } from "react";
import { AiOutlineRest } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [Addtask, setAddtask]=useState('');

const AddnewTask = (e) => {
  e.preventDefault();
  if(Addtask === " ")return;
  const NewTask = {
    text: Addtask,
    completed: false,
    id: Date.now()
  }
  setTasks([...tasks, NewTask]);
  setAddtask(" ");
}

  const RemoveTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index))
  }

  const tasktoggle = (index) => {
   const taskList = [...tasks];
    const obj = { ...taskList[index]}
    obj.completed = !obj.completed;
    taskList[index] = obj;
    setTasks(taskList)
  }

  const handleEditClick = (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newTitle } : task
        )
      );
    }
  };

  return (
    <div className="container TODO_lIST">
      <h1 className="heading">TaskMaster</h1>
      <form onSubmit={AddnewTask}>
        <input
        placeholder="Add Your New Task"
        className="in-text"
        onChange={(e) => setAddtask(e.target.value)}
        value={Addtask} 
        />
        <button className="add-btn">Add Task</button>
      </form>
      <div className="task-list">
        {tasks.map((item, i) => (
          <div className="task" key={i}>
            <div
              className="task-text"
              style={{ textDecoration: item.completed ? "line-through" : "none" }}
            >
              {item.text}
            </div>
            <div className="task-controls">
 <input
                className="check"
                type="checkbox"
                checked={item.completed}
                onChange={() => tasktoggle(i)}
              />
              <button className="edit-btn" onClick={() => handleEditClick(item.id)}>
              <AiFillEdit />
              </button>
              <button className="delete-btn" onClick={() => RemoveTask(i)}>
                <AiOutlineRest />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
