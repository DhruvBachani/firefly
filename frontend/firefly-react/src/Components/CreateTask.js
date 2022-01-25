import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const CreateTask = () => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  // useEffect(() => {
    
  // }

  // const fetchTasks = (e) => {

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name,
      description,
    };

    console.log(newTask);

    // createEntry(newEntry, this.props.history);
    // alert("New Entry Successfully Created.");
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

            <hr />
            <h2>All TASKS</h2>
            <hr />

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
