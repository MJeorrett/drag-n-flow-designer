import React from 'react';
import { Button } from '@material-ui/core';

const FieldsEditor = ({
  fieldIds,
  addField,
}) => {
  return (
    <>
      <ul>
        {fieldIds.map(fieldId => <li key={fieldId}>{fieldId}</li>)}
      </ul>
      <Button type="button" onClick={addField}>Add Field</Button>
    </>
  );
};

export default FieldsEditor;
