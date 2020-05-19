import { v4 as generateId } from 'uuid';

export const createNewField = label => ({
  id: generateId(),
  label,
  type: 'slt',
});


export const fieldTypes = {
  slt: "Single Line Text",
  number: "Number",
  checkbox: "Checkbox",
};
