import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskCard from "./TaskCard";

const SelectActivity = () => {
  let [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/tasks").then((res) => setTasks(res.data));
  });

  return (
    <div className="volunteer">
      <hr />
      <h2>All TASKS</h2>
      <hr />
      <div className="tasks">
        {tasks.map((task) => (
          <TaskCard key={task.taskId} task={task} />
        ))}
      </div>
    </div>
  );
};

export default SelectActivity;
