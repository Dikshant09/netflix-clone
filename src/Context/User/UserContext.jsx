import { useReducer, createContext } from "react";
import userReducer from "./UserReducer.jsx";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    email: '',
    name: 'dk',
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Set an user email
  const setUserEmail = (email, type) => {
    dispatch({
      type: "SET_USER_EMAIL",
      payload: email,
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUserEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
