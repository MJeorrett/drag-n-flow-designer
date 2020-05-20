import { createSlice, createSelector } from '@reduxjs/toolkit';

import engine from '../diagramEngine';

import { internalActions as stepActions } from './steps';

const slice = createSlice({
  name: 'stepBranchConditions',
  initialState: {
    // Keyed by step id.
    ids: [],
    items: {},
  },
  reducers: {
    setType: (state, { payload: { stepId, newType } }) => {
      state.items[stepId].type = newType;
    },
    setFieldId: (state, { payload: { stepId, newFieldId } }) => {
      state.items[stepId].fieldId = newFieldId;
    }
  },
  extraReducers: {
    [stepActions.add]: (state, { payload: { step, branchCondition } }) => {
      state.ids.push(step.id);
      state.items[step.id] = branchCondition;
    },
    [stepActions.remove]: (state, { payload: { stepId } }) => {
      state.ids = state.ids.filter(id => id !== stepId);
      delete state.items[stepId];
  },
  },
});

export const {
  name,
  reducer,
} = slice;

export const actions = {
  setType: (stepId, newType) => {
    engine.getModel().getNode(stepId).setBranchType(newType);
    engine.repaintCanvas();
    return slice.actions.setType({ stepId, newType });
  },
  setFieldId: (stepId, newFieldId) => slice.actions.setFieldId({ stepId, newFieldId }),
};

const selectStepBranchConditionsState = state => state[slice.name];

export const selectors = {
  makeSelectByStepId: () => createSelector(
    selectStepBranchConditionsState,
    (_, stepId) => stepId,
    (state, stepId) => state.items[stepId],
  ),
};
