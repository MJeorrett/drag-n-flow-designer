import { createSlice, createSelector } from '@reduxjs/toolkit';

import debounceAction from './utils/debounceAction';

const slice = createSlice({
  name: 'steps',
  initialState: {
    ids: [],
    items: {},
    selectedStepId: null,
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
    setSelected: (state, { payload: { stepId } }) => {
      state.selectedStepId = stepId;
    },
    toggleSelected: (state, { payload: { stepId } }) => {
      state.selectedStepId = stepId === state.selectedStepId ? null : stepId;
    },
    setSelectedStepTitle: (state, { payload: { stepId, newTitle } }) => {
      state.items[state.selectedStepId].title = newTitle;
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
  setSelected: stepId => slice.actions.setSelected({ stepId }),
  toggleSelected: stepId => slice.actions.toggleSelected({ stepId }),
  setSelectedStepTitle: newTitle => debounceAction(
    slice.actions.setSelectedStepTitle({ newTitle })
  ),
};

const selectStepsState = state => state[slice.name];

export const selectors = {
  count: createSelector(
    selectStepsState,
    state => state.ids.length,
  ),
  selectedStepId: createSelector(
    selectStepsState,
    state => state.selectedStepId,
  ),
  selectedStep: createSelector(
    selectStepsState,
    state => state.items[state.selectedStepId],
  ),
  makeSelectStepById: () => createSelector(
    selectStepsState,
    (_, stepId) => stepId,
    (state, stepId) => state.items[stepId],
  ),
};
