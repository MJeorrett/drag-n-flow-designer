import { createSlice, createSelector } from '@reduxjs/toolkit';

import debounceAction from './utils/debounceAction';

const slice = createSlice({
  name: 'steps',
  initialState: {
    ids: [],
    items: {},
    selectedStepIds: [],
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
    addSelectedStepId: (state, { payload: { stepId } }) => {
      if (state.selectedStepIds.includes(stepId)) return;
      state.selectedStepIds.push(stepId);
    },
    removeSelectedStepId: (state, { payload: { stepId } }) => {
      state.selectedStepIds = state.selectedStepIds.filter(id => id !== stepId);
    },
    setSelectedStepTitle: (state, { payload: { stepId, newTitle } }) => {
      state.items[state.selectedStepIds[0]].title = newTitle;
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
  addSelectedStepId: stepId => slice.actions.addSelectedStepId({ stepId }),
  removeSelectedStepId: stepId => slice.actions.removeSelectedStepId({ stepId }),
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
  selectedStepIds: createSelector(
    selectStepsState,
    state => state.selectedStepIds,
  ),
  selectedStep: createSelector(
    selectStepsState,
    state => {
      if (state.selectedStepIds.length === 0) {
        return null;
      }
      return state.items[state.selectedStepIds[0]];
    },
  ),
  makeSelectStepById: () => createSelector(
    selectStepsState,
    (_, stepId) => stepId,
    (state, stepId) => state.items[stepId],
  ),
};
