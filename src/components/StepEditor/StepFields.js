import React from 'react';
import { Button, List, ListItem } from '@material-ui/core';

export default ({
  fieldIds,
  addField,
  setSelectedFieldId
}) => {
  const renderFields = fieldIds => (
    fieldIds.map(fieldId => (
      <ListItem
        button
        key={fieldId}
        onClick={() => setSelectedFieldId(fieldId)}
      >
        {fieldId}
      </ListItem>
    ))
  );
  return (
    <>
      <List>
        {renderFields(fieldIds)}
      </List>
      <Button type="button" variant="contained" onClick={addField}>Add Field</Button>
    </>
  );
};
