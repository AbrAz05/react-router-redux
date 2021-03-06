const reducer = (state, action) => {
  /* return state; */
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
