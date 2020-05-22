import React from 'react';
import { Button, List, ListItem } from '@material-ui/core';

import { createNewField, fieldTypes } from '../../models';

const SectionFields = ({
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
        {field.label} ({field.type ? fieldTypes[field.type] : null})
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
      <div>
        <Button
          type="button"
          variant="contained"
          onClick={handleAddField}
        >
          Add Field
        </Button>
      </div>
    </>
  );
};

export default SectionFields;
