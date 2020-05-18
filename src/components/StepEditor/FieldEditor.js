import React from 'react';

const FieldEditor = ({
  fieldId,
}) => {
  return (
    <li key={fieldId}>{fieldId}</li>
  );
};

export default FieldEditor;
