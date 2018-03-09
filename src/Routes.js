// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainContainer from './Main/Main.container';
import BookingsContainer from './Bookings/Bookings.container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/bookings" component={BookingsContainer} />
    <Route exact path="/:locale" component={MainContainer} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
