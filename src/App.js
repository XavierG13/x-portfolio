import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages Tags
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./components/Contact/Contact";

// Components Tags
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";

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
