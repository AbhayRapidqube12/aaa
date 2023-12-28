const initialState = {
  // other initial states
  category: null,
  subcategory: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload.category,
        subcategory: action.payload.subcategory,
      };
    // other cases
    default:
      return state;
  }
};

export default reducer;