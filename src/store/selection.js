import { createSlice, createSelector } from '@reduxjs/toolkit'

const createSlicePropertyReducer = (key, propertyName) => ({
  [key]: (state, { payload: newValue }) => {
    state[propertyName] = newValue;
  },
});

const createSlicePropertyAction = key => newValue => (
  slice.actions[key](newValue)
);

const createSlicePropertySelector = propertyName => state => state[propertyName];

const createSetPropertySlice = propertyName => {
  const key = `set-${propertyName}`;
  return {
    reducer: createSlicePropertyReducer(key, propertyName),
    action: createSlicePropertyAction(key),
    selector: createSlicePropertySelector(propertyName),
  };
};

const sliceProperties = {
  startNodeIsSelected: createSetPropertySlice('startNodeIsSelected'),
  selectedSectionId: createSetPropertySlice('selectedSectionId'),
  selectedFieldId: createSetPropertySlice('selectedFieldId'),
  stepEditorIsOpen: createSetPropertySlice('stepEditorIsOpen'),
  fieldEditorIsOpen: createSetPropertySlice('fieldEditorIsOpen'),
};

const slice = createSlice({
  name: 'selection',
  initialState: {
    selectedStepIds: [],
    selectedFinishNodeIds: [],
    startNodeIsSelected: false,
    selectedSectionId: null,
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
    ...sliceProperties.startNodeIsSelected.reducer,
    ...sliceProperties.selectedSectionId.reducer,
    ...sliceProperties.selectedFieldId.reducer,
    ...sliceProperties.stepEditorIsOpen.reducer,
    ...sliceProperties.fieldEditorIsOpen.reducer,
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
  setStartNodeIsSelected: newState => sliceProperties.startNodeIsSelected.action(newState),
  setSelectedSectionId: sectionId => sliceProperties.selectedSectionId.action(sectionId),
  setSelectedFieldId: fieldId => sliceProperties.selectedFieldId.action(fieldId),
  setStepEditorIsOpen: newState => sliceProperties.stepEditorIsOpen.action(newState),
  setFieldEditorIsOpen: newState => sliceProperties.fieldEditorIsOpen.action(newState),
};

const createSliceSelector = (...selectors) => createSelector(
  state => state[slice.name],
  ...selectors,
);

const selectSelectedStepIds = createSliceSelector(
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
  selectedFinishNodeIds: createSliceSelector(
    state => state.selectedFinishNodeIds,
  ),
  startNodeIsSelected: createSliceSelector(
    sliceProperties.startNodeIsSelected.selector,
  ),
  selectedNodeCount: createSliceSelector(
    state => (
      state.selectedStepIds.length +
      state.selectedFinishNodeIds.length +
      state.startNodeIsSelected ? 1 : 0
    ),
  ),
  selectedSectionId: createSliceSelector(
    sliceProperties.selectedSectionId.selector,
  ),
  selectedFieldId: createSliceSelector(
    sliceProperties.selectedFieldId.selector,
  ),
  stepEditorIsOpen: createSliceSelector(
    sliceProperties.stepEditorIsOpen.selector,
  ),
  fieldEditorIsOpen: createSliceSelector(
    sliceProperties.fieldEditorIsOpen.selector,
  ),
};
