const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_EMAIL":
      return {
        ...state,
        Email: action.payload,
      };
    case "SET_USER_NAME":
      return {
        ...state,
        Name: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
