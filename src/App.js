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
          <Route exact path="/apply" render={() => {
            window.location.href="/pages/apply.html"
            }} />
          <Route exact path="/swapkown on gyrt.html" render={() => {
            window.location.href="/pages/swapkown_on_gyrt.html"
            }} />
          <Route exact path="/swapkown%20on%20gyrt.html" render={() => {
            window.location.href="/pages/swapkown_on_gyrt.html"
            }} />
          <Route path="/volunteer-opportunities">
            <VolunteerOpportunities />
          </Route>
        </Switch>
    </Router>
  );
}
