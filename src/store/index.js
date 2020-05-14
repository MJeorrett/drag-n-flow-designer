import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createDebounced from 'redux-debounced';

import * as stepsSlice from './steps';
import * as fieldsSlice from './fields';
import * as stepFields from './stepFields';

const store = configureStore({
  reducer: {
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
  steps: stepsSlice.actions,
  fields: fieldsSlice.actions,
};

export const selectors = {
  steps: {
    ...stepsSlice.selectors,
    ...stepFields.selectors,
  },
  fields: fieldsSlice.selectors,
};

export default store;
