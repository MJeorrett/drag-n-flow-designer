import React, { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@material-ui/core';

function ContextMenu() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleRightClick = event => {
    event.preventDefault();
    setMousePosition({ x: event.clientX, y: event.clientY });
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
  );
}

export default ContextMenu;
