import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import TempLink from './components/tempLink';

const Routes = () => (
  <Switch>
    <Route path="/temp" component={TempLink} />
  </Switch>
);

export default withRouter(Routes);
