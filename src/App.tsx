import React from 'react';
import { Route } from 'react-router';

import Agents from './containers/Agents/Agents';

function App() {
  return (
    <main>
        <Route path="/" component={Agents} />
    </main>
  );
}

export default App;
