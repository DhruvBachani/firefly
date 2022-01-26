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
        <div className="row">
          <div className="col-md-1"></div>
          {tasks.map((task) => (
            <div className="col-md-2">
              <TaskCard key={task.taskId} task={task} />
            </div>
            
          ))}
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectActivity;
