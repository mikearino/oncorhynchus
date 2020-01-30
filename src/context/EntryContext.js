import React from "react";

//This is the pipe
const EntryContext = React.createContext();

//create a component that can accept another component as an argument
export const EntryProvider = ({ children }) => {
  return (
    <EntryContext.Provider>
      {/* argument is going to be shown inside EntryProvider */}
      {children}
    </EntryContext.Provider>
  );
};
