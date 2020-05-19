import React from 'react';
import { Button, List, ListItem } from '@material-ui/core';

import { createNewField } from '../../models';

const StepFields = ({
  fields,
  totalFieldsCount,
  addField,
  setSelectedField
}) => {
  const renderFields = () => (
    fields.map(field => (
      <ListItem
        button
        key={field.id}
        onClick={() => setSelectedField(field.id)}
      >
        {field.label}
      </ListItem>
    ))
  );

  const handleAddField = () => {
    addField(createNewField(`New Field ${totalFieldsCount + 1}`))
  };

  return (
    <>
      <List>
        {renderFields()}
      </List>
      <Button
        type="button"
        variant="contained"
        onClick={handleAddField}
      >
        Add Field
      </Button>
    </>
  );
};

export default StepFields;
