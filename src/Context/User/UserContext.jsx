import { useReducer, createContext } from "react";
import userReducer from "./UserReducer.jsx";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    Email: '',
    Name: '',
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Set an user email
  const setUserEmail = (email, type) => {
    dispatch({
      type: "SET_USER_EMAIL",
      payload: email,
    });
  };

  // Set an user name
  const setUserName = (name, type) => {
    dispatch({
      type: "SET_USER_NAME",
      payload: name,
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUserEmail,
        setUserName
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
