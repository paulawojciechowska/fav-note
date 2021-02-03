import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitter from 'views/Twitter';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/notes" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitter" component={Twitter} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
