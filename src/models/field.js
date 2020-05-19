import { v4 as generateId } from 'uuid';

export const createNewField = label => ({
  id: generateId(),
  label,
  type: '',
});
