import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/profile';
import { MapHistory, Game, Matches, LoginForm, SignupForm } from './components/index';
import { Splash } from './Splash';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/profile" component={Profile} />
    <Route path="/game" component={Game} />
    <Route path="/map" component={MapHistory} />
    <Route path="/matches" component={Matches} />
    <Route path='/login' component={LoginForm} />
    <Route path='/signup' component={SignupForm} />
  </Switch>
);

export default withRouter(Routes);
