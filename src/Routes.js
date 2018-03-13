// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainContainer from './Main/Main.container';
import BookingsContainer from './Bookings/Bookings.container';
import ContactContainer from './Contact/Contact.container';
import AboutContainer from './About/About.container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/bookings" component={BookingsContainer} />
    <Route exact path="/contact" component={ContactContainer} />
    <Route exact path="/about" component={AboutContainer} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
