import { createSlice, createSelector } from '@reduxjs/toolkit';

import { internalActions as sectionActions } from './sections';

const slice = createSlice({
  name: 'stepSections',
  initialState: {
    stepSectionIds: {},
  },
  extraReducers: {
    [sectionActions.add]: (state, { payload: { stepId, section } }) => {
      if (!state.stepSectionIds[stepId]) {
        state.stepSectionIds[stepId] = [];
      }
      state.stepSectionIds[stepId].push(section.id);
    },
  },
});

export const {
  name,
  reducer,
} = slice;

const selectStepFieldsState = state => state[slice.name];

export const selectors = {
  makeSelectSectionIdsByStepId: () => createSelector(
    selectStepFieldsState,
    (_, stepId) => stepId,
    (state, stepId) => state.stepSectionIds[stepId] || [],
  ),
};
