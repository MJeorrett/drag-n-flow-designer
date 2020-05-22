import { createSlice, createSelector } from '@reduxjs/toolkit';

import { internalActions as fieldActions } from './fields';

const slice = createSlice({
  name: 'sections',
  initialState: {
    ids: [],
    items: {},
  },
  reducers: {
    add: (state, { payload: { section } }) => {
      state.ids.push(section.id);
      state.items[section.id] = section;
    },
    setTitle: (state, { payload: { sectionId, newTitle } }) => {
      state.items[sectionId].title = newTitle;
    },
  },
  extraReducers: {
    [fieldActions.add]: (state, { payload: { sectionId, field } }) => {
      state.items[sectionId].fieldIds.push(field.id);
    },
  },
});

export const {
  name,
  reducer,
  actions: internalActions,
} = slice;

export const actions = {
  add: (stepId, section) => slice.actions.add({ stepId, section }),
  setTitle: (sectionId, newTitle) => slice.actions.setTitle({ sectionId, newTitle }),
};

const selectSectionsState = state => state[slice.name];

const makeSelectById = () => createSelector(
  selectSectionsState,
  (_, sectionId) => sectionId,
  (state, sectionId) => state.items[sectionId],
);

export const selectors = {
  totalCount: createSelector(
    selectSectionsState,
    state => state.ids.length,
  ),
  makeSelectById,
  makeSelectFieldIdsById: () => createSelector(
    makeSelectById(),
    section => {
      return section.fieldIds;
    },
  ),
};
