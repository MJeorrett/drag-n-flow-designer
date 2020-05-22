import { configureStore, getDefaultMiddleware, createSelector } from '@reduxjs/toolkit';
import createDebounced from 'redux-debounced';

import * as selectionSlice from './selection';
import * as stepsSlice from './steps';
import * as stepBranchConditionsSlice from './stepBranchConditions';
import * as sectionsSlice from './sections';
import * as stepSectionsSlice from './stepSections';
import * as stepFieldsSlice from './stepFields';
import * as fieldsSlice from './fields';

const store = configureStore({
  reducer: {
    [selectionSlice.name]: selectionSlice.reducer,
    [stepsSlice.name]: stepsSlice.reducer,
    [stepBranchConditionsSlice.name]: stepBranchConditionsSlice.reducer,
    [sectionsSlice.name]: sectionsSlice.reducer,
    [stepFieldsSlice.name]: stepFieldsSlice.reducer,
    [stepSectionsSlice.name]: stepSectionsSlice.reducer,
    [fieldsSlice.name]: fieldsSlice.reducer,
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
  sections: sectionsSlice.actions,
  fields: fieldsSlice.actions,
};

const composedStepSelectors = {
  makeSelectFieldsByStepId: () => createSelector(
    state => state,
    stepFieldsSlice.selectors.makeSelectFieldIdsByStepId(),
    fieldsSlice.selectors.makeSelectFieldsByIds(),
  ),
};

const composedFieldSelectors = {
  makeSelectFieldsBySectionId: () => createSelector(
    state => state,
    sectionsSlice.selectors.makeSelectFieldIdsById(),
    fieldsSlice.selectors.makeSelectFieldsByIds(),
  ),
};

export const selectors = {
  steps: {
    ...stepsSlice.selectors,
    ...stepSectionsSlice.selectors,
    ...composedStepSelectors,
  },
  branchConditions: {
    ...stepBranchConditionsSlice.selectors,
  },
  sections: sectionsSlice.selectors,
  fields: {
    ...fieldsSlice.selectors,
    ...composedFieldSelectors,
  },
  selection: selectionSlice.selectors,
};

export default store;
