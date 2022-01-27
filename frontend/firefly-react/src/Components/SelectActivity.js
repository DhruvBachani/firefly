import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
      <h1>Volunteering Tasks</h1>
      <hr />
      <p>
        Here you can view and apply to activities listed by your organization.
        Selected tasks can be accessed later from your dashboard.
      </p>
      <div className="tasks">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {tasks.map((task) => (
              <Grid item xs={2}>
                <TaskCard key={task.taskId} task={task} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default SelectActivity;

// <div className="row">
//           <div className="col-md-1"></div>
// {tasks.map((task) => (
//   <div className="col-md-2">
//     <TaskCard key={task.taskId} task={task} />
//   </div>
// ))}
//           <div className="col-md-1"></div>
//         </div>
