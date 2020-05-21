import { createSlice, createSelector } from '@reduxjs/toolkit';

import debounceAction from './utils/debounceAction';

const slice = createSlice({
  name: 'steps',
  initialState: {
    ids: [],
    items: {},
    firstStepId: null,
  },
  reducers: {
    add: (state, { payload: { step } }) => {
      state.ids.push(step.id);
      state.items[step.id] = step;
    },
    remove: (state, { payload: { stepId } }) => {
      state.ids = state.ids.filter(id => id !== stepId);
      delete state.items[stepId];
      if (state.firstStepId === stepId) state.firstStepId = null;
    },
    setTitle: (state, { payload: { stepId, newTitle } }) => {
      state.items[stepId].title = newTitle;
    },
    setIsFinalStep: (state, { payload: { stepId, newState } }) => {
      state.items[stepId].isFinalStep = newState;
    },
    setFirstStepId: (state, { payload: { newFirstStepId } }) => {
      state.firstStepId = newFirstStepId;
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
  setIsFinalStep: (stepId, newState) => slice.actions.setIsFinalStep({ stepId, newState }),
  setFirstStepId: newFirstStepId => slice.actions.setFirstStepId({ newFirstStepId }),
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
  firstStepId: createSelector(
    selectStepsState,
    state => state.firstStepId,
  ),
};
