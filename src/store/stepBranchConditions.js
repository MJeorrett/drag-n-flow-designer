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
    },
    setFinishWhenFalse: (state, { payload: { stepId, newState } }) => {
      state.items[stepId].finishWhenFalse = newState;
    },
    setFinishWhenTrue: (state, { payload: { stepId, newState } }) => {
      state.items[stepId].finishWhenTrue = newState;
    },
    setNextStepId: (state, { payload: { stepId, newNextStepId } }) => {
      state.items[stepId].nextStepId = newNextStepId;
    },
    setNextStepIdWhenFalse: (state, { payload: { stepId, newNextStepId } }) => {
      state.items[stepId].nextStepIdWhenFalse = newNextStepId;
    },
    setNextStepIdWhenTrue: (state, { payload: { stepId, newNextStepId } }) => {
      state.items[stepId].nextStepIdWhenTrue = newNextStepId;
    },
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
  setFinishWhenFalse: (stepId, newState) => slice.actions.setFinishWhenFalse({ stepId, newState }),
  setFinishWhenTrue: (stepId, newState) => slice.actions.setFinishWhenTrue({ stepId, newState }),
  setNextStepId: (stepId, newNextStepId) => slice.actions.setNextStepId({ stepId, newNextStepId }),
  setNextStepIdWhenFalse: (stepId, newNextStepId) => slice.actions.setNextStepIdWhenFalse({ stepId, newNextStepId }),
  setNextStepIdWhenTrue: (stepId, newNextStepId) => slice.actions.setNextStepIdWhenTrue({ stepId, newNextStepId }),
};

const selectStepBranchConditionsState = state => state[slice.name];

export const selectors = {
  makeSelectByStepId: () => createSelector(
    selectStepBranchConditionsState,
    (_, stepId) => stepId,
    (state, stepId) => state.items[stepId],
  ),
};
