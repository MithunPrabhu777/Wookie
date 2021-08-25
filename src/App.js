import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
