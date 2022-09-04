// import { createContext, useReducer } from "react";
// import UserReducer from "./UserReducer";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const initialState = {
//         email: '@',
//         name: '',
//     };

//     const [state, dispatch] = useReducer(UserReducer, initialState);

//     return (
//         <UserContext.Provider
//             value={{
//                 ...state,
//                 dispatch
//             }}
//         >
//             {children}
//         </UserContext.Provider>
//     )
// }

// export default UserContext;


import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    email: '',
    name: '',
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

   return (
    <UserContext.Provider
      value={{
        // passing complete state
        ...state,
        dispatch,
      }}
    >
      
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
