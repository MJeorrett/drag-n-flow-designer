import React from 'react';
import { Button } from '@material-ui/core';

export default ({
  selectedFieldId,
  onCloseRequested,
}) => {
  return (
    <>
      <p>Id: {selectedFieldId}</p>
      <Button onClick={onCloseRequested}>Close</Button>
    </>
  );
};
