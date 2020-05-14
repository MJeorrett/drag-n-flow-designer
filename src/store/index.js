import { configureStore } from '@reduxjs/toolkit';

import * as stepsSlice from './steps';

const store = configureStore({
  reducer: {
    [stepsSlice.name]: stepsSlice.reducer,
  },
});

export const actions = {
  steps: stepsSlice.actions,
};

export const selectors = {
  steps: stepsSlice.selectors,
};

export default store;
