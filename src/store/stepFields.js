import { createSlice, createSelector } from '@reduxjs/toolkit';

import { internalActions as fieldActions } from './fields';

const slice = createSlice({
  name: 'stepFields',
  initialState: {
    stepFieldIds: {},
  },
  extraReducers: {
    [fieldActions.add]: (state, { payload: { stepId, field } }) => {
      if (!state.stepFieldIds[stepId]) {
        state.stepFieldIds[stepId] = [];
      }
      state.stepFieldIds[stepId].push(field.id);
    },
  },
});

export const {
  name,
  reducer,
} = slice;

const selectStepFieldsState = state => state[slice.name];

export const selectors = {
  makeSelectFieldIdsByStepId: () => createSelector(
    selectStepFieldsState,
    (_, stepId) => stepId,
    (state, stepId) => state.stepFieldIds[stepId] || [],
  ),
};
