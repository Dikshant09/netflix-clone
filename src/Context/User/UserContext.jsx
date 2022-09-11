import { useReducer, createContext } from "react";
import userReducer from "./UserReducer.jsx";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    Email: '',
    Name: '',
    Search: '',
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

  // Set an user search
  const setUserSearch = (search, type) => {
    dispatch({
      type: "SET_USER_SEARCH",
      payload: search,
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUserEmail,
        setUserName,
        setUserSearch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
