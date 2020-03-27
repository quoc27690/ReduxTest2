const isAddingReducer = (state = true, action) => {
  if (action.type === 'TOGGLE_PLUS') {
    return !state;
  }
  return state;
};
export default isAddingReducer;
