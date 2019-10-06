import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/profile';
import { MapHistory } from './components/mapHistory';
import Game from './components/game';
import { Matches } from './components/matches';
import { Splash } from './Splash';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/profile" component={Profile} />
    <Route path="/game" component={Game} />
    <Route path="/map" component={MapHistory} />
    <Route path="/matches" component={Matches} />
  </Switch>
);

export default withRouter(Routes);
