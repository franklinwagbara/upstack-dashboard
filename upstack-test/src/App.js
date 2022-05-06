import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
};

export default App;
