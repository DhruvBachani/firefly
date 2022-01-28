import "./App.css";
import CreateTask from "./Components/CreateTask";
import Home from "./Components/Landing/Home";
import Dashboard from "./Components/Landing/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectActivity from "./Components/SelectActivity";
import OtherOrganizationsHomePage from "./Components/OtherOrganizations/OtherOrganizationsHomePage";
import Login from "./Components/Users/Login";
import SignUp from "./Components/Users/SignUp";
import axios from "axios";
import jwt_decode from 'jwt-decode'

const jwt_token = localStorage.getItem('jwt-token')

if (jwt_token){
  axios.defaults.headers.common["Authorization"] = jwt_token
  const decoded_jwtToken = jwt_decode(jwt_token);
  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    window.location.href = "/";
  }
}





function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/createTask" element={<CreateTask />} />
        <Route exact path="/selectActivity" element={<SelectActivity />} />
        <Route exact path="/organizations" element={<OtherOrganizationsHomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
