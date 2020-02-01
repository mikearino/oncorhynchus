import React, { useReducer } from "react";

//This is the pipe, when created it comes with provider.
//Whatever information we provide it is going to become
//available to all of our child components
const EntryContext = React.createContext();
//React knows to run reducer when dispatch is called
const entryReducer = (state, action) => {
  switch (action.type) {
    case "add_entry":
      //return new array with all current values of state and add new entry
      return [...state, { title: `Entry #${state.length + 1}` }];
    default:
      return state;
  }
};

//create a component that can accept another component as an argument
export const EntryProvider = ({ children }) => {
  //1st arg= reducer to use, 2nd is initial state object
  const [entries, dispatch] = useReducer(blogReducer, []);
  //method to run dispatch that gets passed down to provider
  const addEntry = () => {
    dispatch({ type: "add_entry" });
  };

  return (
    <EntryContext.Provider value={{ data: entries, addEntry }}>
      {/* argument is going to be shown inside EntryProvider */}
      {children}
    </EntryContext.Provider>
  );
};

export default EntryContext;
