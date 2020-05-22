const createSlicePropertyReducer = (key, propertyName) => ({
  [key]: (state, { payload: newValue }) => {
    state[propertyName] = newValue;
  },
});

const createSlicePropertyAction = key => (slice, newValue) => (
  slice.actions[key](newValue)
);

const createSlicePropertySelector = propertyName => state => state[propertyName];

const createSimplePropertySlice = propertyName => {
  const key = `set-${propertyName}`;
  return {
    reducer: createSlicePropertyReducer(key, propertyName),
    action: createSlicePropertyAction(key),
    selector: createSlicePropertySelector(propertyName),
  };
};

export default createSimplePropertySlice;