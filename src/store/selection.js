import { createSlice, createSelector } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'selection',
  initialState: {
    selectedStepIds: [],
    selectedFieldId: null,
  },
  reducers: {
    addSelectedStepId: (state, { payload: { stepId } }) => {
      if (state.selectedStepIds.includes(stepId)) return;
      state.selectedStepIds.push(stepId);
    },
    removeSelectedStepId: (state, { payload: { stepId } }) => {
      state.selectedStepIds = state.selectedStepIds.filter(id => id !== stepId);
    },
    setSelectedFieldId: (state, { payload: { fieldId } }) => {
      state.selectedFieldId = fieldId;
    },
  },
});

export const {
  name,
  reducer
} = slice;

export const actions = {
  addSelectedStepId: stepId => slice.actions.addSelectedStepId({ stepId }),
  removeSelectedStepId: stepId => slice.actions.removeSelectedStepId({ stepId }),
  setSelectedFieldId: fieldId => slice.actions.setSelectedFieldId({ fieldId }),
};

const selectSelectionState = state => state[slice.name];

const selectSelectedStepIds = createSelector(
  selectSelectionState,
  state => state.selectedStepIds,
);

export const selectors = {
  selectedStepIds: selectSelectedStepIds,
  selectedStepId: createSelector(
    selectSelectedStepIds,
    selectedStepIds => (
      selectedStepIds.length > 0 ? selectedStepIds[0] : null
    ),
  ),
  selectedFieldId: createSelector(
    selectSelectionState,
    state => state.selectedFieldId,
  ),
};
