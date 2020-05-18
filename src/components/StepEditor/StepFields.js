import React from 'react';
import { Button } from '@material-ui/core';

import StepField from './StepField';

const renderFields = fieldIds => (
  fieldIds.map(fieldId => (
    <StepField
      key={fieldId}
      fieldId={fieldId}
    />
  ))
);

export default ({
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
