import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VolunteerOpportunities from './VolunteerOpportunities'
import OurStory from './OurStory'
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
          <Route path="/our-story">
            <OurStory/>
          </Route>
        </Switch>
    </Router>
  );
}
