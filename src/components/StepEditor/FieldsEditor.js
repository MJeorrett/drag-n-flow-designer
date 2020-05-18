import React from 'react';
import { Button } from '@material-ui/core';

import FieldEditor from './FieldEditor';

const renderFields = fieldIds => (
  fieldIds.map(fieldId => (
    <FieldEditor
      key={fieldId}
      fieldId={fieldId}
    />
  ))
);

const FieldsEditor = ({
  fieldIds,
  addField,
}) => {
  return (
    <>
      <ul>
        {renderFields(fieldIds)}
      </ul>
      <Button type="button" onClick={addField}>Add Field</Button>
    </>
  );
};

export default FieldsEditor;
