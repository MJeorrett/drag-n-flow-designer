import { createSlice, createSelector } from '@reduxjs/toolkit';

import debounceAction from './utils/debounceAction';

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
    setLabel: (state, { payload: { fieldId, newLabel } }) => {
      state.items[fieldId].label = newLabel;
    },
    setType: (state, { payload: { fieldId, newType } }) => {
      state.items[fieldId].type = newType;
    },
  },
});

export const {
  name,
  reducer,
  actions: internalActions,
} = slice;

export const actions = {
  add: (stepId, sectionId, field) => slice.actions.add({ stepId, sectionId, field }),
  setLabel: (fieldId, newLabel) => debounceAction(
    slice.actions.setLabel({ fieldId, newLabel })
  ),
  setType: (fieldId, newType) => slice.actions.setType({ fieldId, newType }),
};

const selectFieldsState = state => state[slice.name];

export const selectors = {
  count: createSelector(
    selectFieldsState,
    state => state.ids.length,
  ),
  makeSelectFieldById: () => createSelector(
    selectFieldsState,
    (_, fieldId) => fieldId,
    (state, fieldId) => state.items[fieldId],
  ),
  makeSelectFieldsByIds: () => createSelector(
    selectFieldsState,
    (_, fieldIds) => fieldIds,
    (state, fieldIds) => fieldIds.map(fieldId => state.items[fieldId]),
  ),
};
