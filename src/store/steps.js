import { createSlice, createSelector } from '@reduxjs/toolkit';

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
    toggleSelected: (state, { payload: { stepId } }) => {
      state.selectedStepId = stepId === state.selectedStepId ? null : stepId;
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
  toggleSelected: stepId => slice.actions.toggleSelected({ stepId }),
};

const selectStepsState = state => state[slice.name];

export const selectors = {
  selectedStep: createSelector(
    selectStepsState,
    state => state.items[state.selectedStepId],
  ),
};
