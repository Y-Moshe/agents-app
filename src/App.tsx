import React from 'react';
import { Route } from 'react-router';

import Agents from './components/Agents/Agents';
import Agent from './containers/Agent/Agent';

function App() {
  return (
    <main>
      <Route path="/" component={Agents} exact />
      <Route path="/:agentName" component={Agent} />
    </main>
  );
}

export default App;
