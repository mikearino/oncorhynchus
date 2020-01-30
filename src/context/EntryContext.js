import React from "react";

//This is the pipe, when created it comes with provider.
//Whatever information we provide it is going to become
//available to all of our child components
const EntryContext = React.createContext();

//create a component that can accept another component as an argument
export const EntryProvider = ({ children }) => {
  const Entries = [{ title: "Entry #1" }, { title: "Entry #2" }];
  return (
    <EntryContext.Provider value={Entries}>
      {/* argument is going to be shown inside EntryProvider */}
      {children}
    </EntryContext.Provider>
  );
};

export default EntryContext;
