import React, { useReducer } from "react";
import { ActionSheetIOS } from "react-native";
//Reusable function to automate the process of setting up context/provider.
//pass the three things needed to customize when context is created.
export default (reducer, actions, initialState) => {
  //The pipe. Whatever information we provide it is going to become
  //available to all of our child components
  return (Context = React.createContext());

  //create a component that can accept another component as an argument
  const Provider = ({ children }) => {
    //1st arg= reducer to use, 2nd is initial state object
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <Context.Provider value={{ state }}>
        {/* argument is going to be shown inside EntryProvider */}
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
