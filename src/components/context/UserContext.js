import React, { createContext, useReducer, useEffect } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    users: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const registerUser = async (username, password, email) => {
    const params = new URLSearchParams({
      username: username,
      password: password,
      email: email,
    });
    const response = await fetch(
      `https://hepepsfirstinterview.pythonanywhere.com//api/#user-create/${params}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(state.users),
      }
    );
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
