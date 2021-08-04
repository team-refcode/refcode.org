import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VolunteerOpportunities from './VolunteerOpportunities'
import GraduatesSummer2019 from './components/GraduatesSummer2019'

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
          <Route path="/volunteer-opportunities">
            <VolunteerOpportunities />
          </Route>
          <Route path="/pages/graduates-summer-2019">
            <GraduatesSummer2019/>
          </Route>
        </Switch>
    </Router>
  );
}
