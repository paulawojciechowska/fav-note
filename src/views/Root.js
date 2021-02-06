import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitter from 'views/Twitter';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />
        <Route exact path={routes.articles} component={Articles} />
        <Route path={routes.article} component={DetailsPage} />
        <Route exact path={routes.twitters} component={Twitter} />
        <Route path={routes.twitter} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
