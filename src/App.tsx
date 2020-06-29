import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';

import Agents from './containers/Agent/Agents';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/agents" component={Agents} />
        <Redirect exact from="/" to="/agents" />
        <Route path="*" render={() => <h1>404 not found</h1>} />
      </Switch>
    </main>
  );
}

export default App;
