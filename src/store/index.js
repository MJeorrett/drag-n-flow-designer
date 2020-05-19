import { configureStore, getDefaultMiddleware, createSelector } from '@reduxjs/toolkit';
import createDebounced from 'redux-debounced';

import * as selectionSlice from './selection';
import * as stepsSlice from './steps';
import * as fieldsSlice from './fields';
import * as stepFields from './stepFields';

const store = configureStore({
  reducer: {
    [selectionSlice.name]: selectionSlice.reducer,
    [stepsSlice.name]: stepsSlice.reducer,
    [fieldsSlice.name]: fieldsSlice.reducer,
    [stepFields.name]: stepFields.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    createDebounced(),
  ],
});

export const actions = {
  steps: {
    ...stepsSlice.actions,
    addStepToSelection: selectionSlice.actions.addSelectedStepId,
    removeStepFromSelection: selectionSlice.actions.removeSelectedStepId,
  },
  fields: {
    ...fieldsSlice.actions,
    setSelectedField: selectionSlice.actions.setSelectedFieldId,
  },
};

export const selectors = {
  steps: {
    ...stepsSlice.selectors,
    ...stepFields.selectors,
    selectedStepIds: selectionSlice.selectors.selectedStepIds,
    selectedStep: createSelector(
      state => state,
      selectionSlice.selectors.selectedStepId,
      stepsSlice.selectors.makeSelectStepById(),
    ),
  },
  fields: {
    ...fieldsSlice.selectors,
    selectedFieldId: selectionSlice.selectors.selectedFieldId,
  },
};

export default store;
