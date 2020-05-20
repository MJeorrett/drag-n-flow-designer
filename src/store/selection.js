import { createSlice, createSelector } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'selection',
  initialState: {
    selectedStepIds: [],
    selectedFinishNodeIds: [],
    startNodeIsSelected: false,
    selectedFieldId: null,
    stepEditorIsOpen: false,
    fieldEditorIsOpen: false,
  },
  reducers: {
    addSelectedStepId: (state, { payload: { stepId } }) => {
      if (state.selectedStepIds.includes(stepId)) return;
      state.selectedStepIds.push(stepId);
    },
    removeSelectedStepId: (state, { payload: { stepId } }) => {
      state.selectedStepIds = state.selectedStepIds.filter(id => id !== stepId);
    },
    addSelectedFinishNodeId: (state, { payload: { finishNodeId } }) => {
      if (state.selectedFinishNodeIds.includes(finishNodeId)) return;
      state.selectedFinishNodeIds.push(finishNodeId);
    },
    removeSelectedFinishNode: (state, { payload: { finishNodeId } }) => {
      state.selectedFinishNodeIds = state.selectedFinishNodeIds.filter(id => id !== finishNodeId);
    },
    setStartNodeIsSelected: (state, { payload: { newState } }) => {
      state.startNodeIsSelected = newState;
    },
    setSelectedFieldId: (state, { payload: { fieldId } }) => {
      state.selectedFieldId = fieldId;
    },
    setStepEditorIsOpen: (state, { payload: { newState } }) => {
      state.stepEditorIsOpen = newState;
    },
    setFieldEditorIsOpen: (state, { payload: { newState } }) => {
      state.fieldEditorIsOpen = newState;
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
  addSelectedFinishNodeId: finishNodeId => slice.actions.addSelectedFinishNodeId({ finishNodeId }),
  removeSelectedFinishNode: finishNodeId => slice.actions.removeSelectedFinishNode({ finishNodeId }),
  setStartNodeIsSelected: newState => slice.actions.setStartNodeIsSelected({ newState }),
  setSelectedFieldId: fieldId => slice.actions.setSelectedFieldId({ fieldId }),
  setStepEditorIsOpen: newState => slice.actions.setStepEditorIsOpen({ newState }),
  setFieldEditorIsOpen: newState => slice.actions.setFieldEditorIsOpen({ newState }),
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
  selectedFinishNodeIds: createSelector(
    selectSelectionState,
    state => state.selectedFinishNodeIds,
  ),
  startNodeIsSelected: createSelector(
    selectSelectionState,
    state => state.startNodeIsSelected,
  ),
  selectedNodeCount: createSelector(
    selectSelectionState,
    state => (
      state.selectedStepIds.length +
      state.selectedFinishNodeIds.length +
      state.startNodeIsSelected ? 1 : 0
    ),
  ),
  selectedFieldId: createSelector(
    selectSelectionState,
    state => state.selectedFieldId,
  ),
  stepEditorIsOpen: createSelector(
    selectSelectionState,
    state => state.stepEditorIsOpen,
  ),
  fieldEditorIsOpen: createSelector(
    selectSelectionState,
    state => state.fieldEditorIsOpen,
  ),
};
