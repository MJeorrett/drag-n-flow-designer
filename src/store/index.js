import { configureStore, getDefaultMiddleware, createSelector } from '@reduxjs/toolkit';
import createDebounced from 'redux-debounced';

import * as selectionSlice from './selection';
import * as stepsSlice from './steps';
import * as stepBranchConditionsSlice from './stepBranchConditions';
import * as fieldsSlice from './fields';
import * as stepFields from './stepFields';

const store = configureStore({
  reducer: {
    [selectionSlice.name]: selectionSlice.reducer,
    [stepsSlice.name]: stepsSlice.reducer,
    [stepBranchConditionsSlice.name]: stepBranchConditionsSlice.reducer,
    [fieldsSlice.name]: fieldsSlice.reducer,
    [stepFields.name]: stepFields.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    createDebounced(),
  ],
});

export const actions = {
  selection: selectionSlice.actions,
  steps: stepsSlice.actions,
  branchConditions: stepBranchConditionsSlice.actions,
  fields: fieldsSlice.actions,
};

const composedStepSelectors = {
  selectedStep: createSelector(
    state => state,
    selectionSlice.selectors.selectedStepId,
    stepsSlice.selectors.makeSelectStepById(),
  ),
  makeSelectFieldsByStepId: () => createSelector(
    state => state,
    stepFields.selectors.makeSelectFieldIdsByStepId(),
    fieldsSlice.selectors.makeSelectFieldsByIds(),
  ),
};

const composedBranchConditionSelectors = {
  selectedStepBranchCondition: createSelector(
    state => state,
    selectionSlice.selectors.selectedStepId,
    stepBranchConditionsSlice.selectors.makeSelectByStepId(),
  ),
};

const composedFieldSelectors = {
  selectedField: createSelector(
    state => state,
    selectionSlice.selectors.selectedFieldId,
    fieldsSlice.selectors.makeSelectFieldById(),
  ),
};

export const selectors = {
  steps: {
    ...stepsSlice.selectors,
    ...stepFields.selectors,
    ...composedStepSelectors,
  },
  branchConditions: {
    ...stepBranchConditionsSlice.selectors,
    ...composedBranchConditionSelectors,
  },
  fields: {
    ...fieldsSlice.selectors,
    ...composedFieldSelectors,
  },
  selection: selectionSlice.selectors,
};

export default store;
