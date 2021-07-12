import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VolunteerOpportunities from './VolunteerOpportunities'
export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" render={() => {
            window.location.href="pages/index.html"
            }} />
          <Route path="/volunteer-opportunities">
            <VolunteerOpportunities />
          </Route>
        </Switch>
    </Router>
  );
}
