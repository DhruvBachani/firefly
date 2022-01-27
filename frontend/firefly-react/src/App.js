import "./App.css";
import CreateTask from "./Components/CreateTask";
import Home from "./Components/Landing/Home";
import Dashboard from "./Components/Landing/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectActivity from "./Components/SelectActivity";
import OtherOrganizationsHomePage from "./Components/OtherOrganizations/OtherOrganizationsHomePage";

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
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
