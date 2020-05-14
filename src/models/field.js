import { v4 as generateId } from 'uuid';

export const createNewField = () => ({
  id: generateId(),
  label: '',
  type: '',
});
