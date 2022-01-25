import "./App.css";
import CreateTask from "./Components/CreateTask";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<CreateTask />} />
        </Routes>
    </Router>
  );
}

export default App;
