import { createSlice, createSelector } from '@reduxjs/toolkit';

import debounceAction from './utils/debounceAction';

const slice = createSlice({
  name: 'steps',
  initialState: {
    ids: [],
    items: {},
  },
  reducers: {
    add: (state, { payload: { step } }) => {
      state.ids.push(step.id);
      state.items[step.id] = step;
    },
    remove: (state, { payload: { stepId } }) => {
      state.ids = state.ids.filter(id => id !== stepId);
      delete state.items[stepId];
    },
    setStepTitle: (state, { payload: { stepId, newTitle } }) => {
      state.items[stepId].title = newTitle;
    },
  },
});

export const {
  name,
  reducer,
} = slice;

export const actions = {
  add: step => slice.actions.add({ step }),
  remove: stepId => slice.actions.remove({ stepId }),
  setStepTitle: (stepId, newTitle) => debounceAction(
    slice.actions.setStepTitle({ stepId, newTitle })
  ),
};

const selectStepsState = state => state[slice.name];

export const selectors = {
  count: createSelector(
    selectStepsState,
    state => state.ids.length,
  ),
  makeSelectStepById: () => createSelector(
    selectStepsState,
    (_, stepId) => stepId,
    (state, stepId) => state.items[stepId],
  ),
};
