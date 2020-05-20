import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import engine, { initialize } from './diagramEngine';

import Layout from './components/Layout';

initialize(store);

function App() {
  return (
    <Provider store={store}>
      <Layout engine={engine} />
    </Provider>
  );
}

export default App;
