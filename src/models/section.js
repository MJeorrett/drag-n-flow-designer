import { v4 as generateId } from 'uuid';

export const createNewSection = title => ({
  id: generateId(),
  title,
  fieldIds: [],
});
