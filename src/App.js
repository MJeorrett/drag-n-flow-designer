import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import engine from './diagramEngine';

import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout engine={engine} />
    </Provider>
  );
}

export default App;
