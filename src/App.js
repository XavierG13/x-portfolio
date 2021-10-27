import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages Tags
import Home from "./pages/Home";

// Components Tags
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
