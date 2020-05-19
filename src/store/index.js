import { configureStore, getDefaultMiddleware, createSelector } from '@reduxjs/toolkit';
import createDebounced from 'redux-debounced';

import * as selectionSlice from './selection';
import * as stepsSlice from './steps';
import * as stepBranchConditionsSlice from './stepBranchConditions';
import * as fieldsSlice from './fields';
import * as stepFieldsSlice from './stepFields';

const store = configureStore({
  reducer: {
    [selectionSlice.name]: selectionSlice.reducer,
    [stepsSlice.name]: stepsSlice.reducer,
    [stepBranchConditionsSlice.name]: stepBranchConditionsSlice.reducer,
    [fieldsSlice.name]: fieldsSlice.reducer,
    [stepFieldsSlice.name]: stepFieldsSlice.reducer,
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

const selecteSelectedStepFieldIds = createSelector(
  state => state,
  selectionSlice.selectors.selectedStepId,
  stepFieldsSlice.selectors.makeSelectFieldIdsByStepId(),
);

const composedStepSelectors = {
  selectedStep: createSelector(
    state => state,
    selectionSlice.selectors.selectedStepId,
    stepsSlice.selectors.makeSelectStepById(),
  ),
  selectedStepFields: createSelector(
    state => state,
    selecteSelectedStepFieldIds,
    fieldsSlice.selectors.makeSelectFieldsByIds(),
  ),
  makeSelectFieldsByStepId: () => createSelector(
    state => state,
    stepFieldsSlice.selectors.makeSelectFieldIdsByStepId(),
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
    ...stepFieldsSlice.selectors,
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
