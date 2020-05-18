import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'fields',
  initialState: {
    ids: [],
    items: {},
    selectedFieldId: null,
  },
  reducers: {
    add: (state, { payload: { field }}) => {
      state.ids.push(field.id);
      state.items[field.id] = field;
    },
    setSelectedFieldId: (state, { payload: { fieldId } }) => {
      state.selectedFieldId = fieldId;
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
  setSelectedFieldId: fieldId => slice.actions.setSelectedFieldId({ fieldId }),
};

const selectFieldsState = state => state[slice.name];

export const selectors = {
  makeSelectFieldById: () => createSelector(
    selectFieldsState,
    (_, fieldId) => fieldId,
    (state, fieldId) => state.items[fieldId],
  ),
  selectedFieldId: createSelector(
    selectFieldsState,
    state => state.selectedFieldId,
  ),
};
