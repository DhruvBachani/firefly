import "./App.css";
import CreateTask from "./Components/CreateTask";
import { BrowserRouter as Router, Navigate, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CreateTask />
    </div>
  );
}

export default App;
