const debounceAction = action => ({
  ...action,
  meta: {
    debounce: {
      time: 300,
    },
  },
});

export default debounceAction;
