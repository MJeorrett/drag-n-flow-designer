const debounceAction = action => ({
  ...action,
  meta: {
    debounce: {
      time: 100,
    },
  },
});

export default debounceAction;
