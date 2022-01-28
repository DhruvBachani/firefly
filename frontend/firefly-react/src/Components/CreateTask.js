import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const CreateTask = () => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskName: name,
      taskDescription: description,
    };
    axios.post("http://localhost:8080/addTask", newTask).then((res) => {
      console.log(res);
    }).catch((err) => {
      alert(err.response.data.error)
    });
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">
              Create a volunteering activity
            </h5>
            <hr />

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Title"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required={true}
                />
              </div>

              <br />
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
