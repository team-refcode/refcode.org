import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Graduates from './Graduates'
export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" render={() => {
            window.location.href="index.html"
            }} />
              <Route exact path="/index.html" render={() => {
            window.location.href="index.html"
            }} />
          <Route path="/react">
            <Graduates />
          </Route>


        </Switch>
    </Router>
  );
}
