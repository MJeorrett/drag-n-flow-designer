import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createDebounced from 'redux-debounced';

import * as stepsSlice from './steps';

const store = configureStore({
  reducer: {
    [stepsSlice.name]: stepsSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    createDebounced(),
  ],
});

export const actions = {
  steps: stepsSlice.actions,
};

export const selectors = {
  steps: stepsSlice.selectors,
};

export default store;
