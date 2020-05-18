import React from 'react';

export default ({
  fieldId,
}) => {
  return (
    <li key={fieldId}>{fieldId}</li>
  );
};
