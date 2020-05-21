import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Menu, MenuItem } from '@material-ui/core';

import store from './store';
import engine, { initialize } from './diagramEngine';

import Layout from './components/Layout';

initialize(store);

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleRightClick = event => {
    event.preventDefault();
    setMousePosition({ x: event.clientX, y: event.clientY });
    console.log(event);
  };

  const handleClose = () => {
    setMousePosition({ x: null, y: null });
  };

  useEffect(() => {
    window.addEventListener('contextmenu', handleRightClick);

    return () => {
      window.removeEventListener('contextmenu', handleRightClick);
    };
  });
  
  return (
    <Provider store={store}>
      <Layout engine={engine} />
      <Menu
        keepMounted
        open={mousePosition.y !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          mousePosition.y !== null && mousePosition.x !== null
            ? { top: mousePosition.y, left: mousePosition.x }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
        <MenuItem onClick={handleClose}>Email</MenuItem>
      </Menu>
    </Provider>
  );
}

export default App;
