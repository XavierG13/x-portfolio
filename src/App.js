import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
