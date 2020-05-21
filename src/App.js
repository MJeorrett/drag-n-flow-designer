import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import engine, { initialize } from './diagramEngine';

import Layout from './components/Layout';

// No need for this now that deletion is fixed.
// But keeping around for time being...
// import ContextMenu from './ContextMenu';

initialize(store);

function App() {
  return (
    <Provider store={store}>
      <Layout engine={engine} />
      {/* <ContextMenu /> */}
    </Provider>
  );
}

export default App;
