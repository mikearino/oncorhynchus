import React, { useReducer } from "react";

//Reusable function to automate the process of setting up context/provider.
//Pass the three things needed to customize when context is created.
export default (reducer, actions, initialState) => {
  //The pipe. Whatever information we provide it is going to become
  //available to all of our child components.
  const Context = React.createContext();

  //Create a component that can accept another component as an argument.
  const Provider = ({ children }) => {
    //1st arg= reducer to use, 2nd is initial state object.
    const [state, dispatch] = useReducer(reducer, initialState);
    //Actions === { addEntry: (dispatch) => { return () => {} }}

    const boundActions = {};
    //Key === 'addEntry'
    for (let key in actions) {
      //Key === 'addEntry' actions === dispatch
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {/* Argument is going to be shown inside EntryProvider. */}
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
