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
    setTitle: (state, { payload: { stepId, newTitle } }) => {
      state.items[stepId].title = newTitle;
    },
  },
});

export const {
  name,
  reducer,
  actions: internalActions,
} = slice;

export const actions = {
  add: (step, branchCondition) => slice.actions.add({ step, branchCondition }),
  remove: stepId => slice.actions.remove({ stepId }),
  setTitle: (stepId, newTitle) => debounceAction(
    slice.actions.setTitle({ stepId, newTitle })
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
