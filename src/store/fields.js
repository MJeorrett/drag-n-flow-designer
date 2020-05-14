import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'fields',
  initialState: {
    ids: [],
    items: {},
  },
  reducers: {
    add: (state, { payload: { field }}) => {
      state.ids.push(field.id);
      state.items[field.id] = field;
    },
  },
});

export const {
  name,
  reducer,
  actions: internalActions,
} = slice;

export const actions = {
  add: (stepId, field) => slice.actions.add({ stepId, field }),
};

const selectFieldsState = state => state[slice.name];

export const selectors = {
  makeSelectFieldById: () => createSelector(
    selectFieldsState,
    (_, fieldId) => fieldId,
    (state, fieldId) => state.items[fieldId],
  ),
};
