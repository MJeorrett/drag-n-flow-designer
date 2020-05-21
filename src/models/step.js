export const createNewStep = (id, title) => ({
  id,
  title: title || '',
  isFinalStep: false,
});
