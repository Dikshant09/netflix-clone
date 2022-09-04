// const UserReducer = (state, action) => {
//     switch(action.type){
//         case "SET_EMAIL":
//             return {
//                 ...state,
//                 email: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default UserReducer;

const UserReducer = (state, action) => {
    switch (action.type) {
      case "SET_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;
  