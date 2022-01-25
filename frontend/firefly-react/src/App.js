import './App.css';
import CreateTask from "./Components/CreateTask";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={CreateTask} />
      </div>
    </Router>
  );
}

export default App;
