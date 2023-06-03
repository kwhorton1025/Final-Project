import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Apply from "./Components/apply";

const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/apply">
            <Apply />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
