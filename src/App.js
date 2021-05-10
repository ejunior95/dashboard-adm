import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '@/pages/home';
import HomePageMobile from '@/pages/homeMobile'
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <Router basename={'/dashboards/dash-log'}>
      <Switch>
        <Route path="/home">
          {isMobile ? <HomePageMobile /> : <HomePage /> }
        </Route>
        <Route exact path="/">
          {isMobile ? <HomePageMobile /> : <HomePage /> }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
