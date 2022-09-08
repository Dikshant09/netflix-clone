const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "REMOVE_ALERT":
      return null;

    default:
      return state;
  }
};

export default alertReducer;
