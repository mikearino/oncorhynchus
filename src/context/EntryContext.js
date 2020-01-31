import React, { useState } from "react";

//This is the pipe, when created it comes with provider.
//Whatever information we provide it is going to become
//available to all of our child components
const EntryContext = React.createContext();

//create a component that can accept another component as an argument
export const EntryProvider = ({ children }) => {
  //entries=initial State, setEntries is the setter, get value from use
  //state
  const [entries, setEntries] = useState([]);
  //add a new array, then take all entries and add to new array
  //then add new object into array
  const addEntries = () => {
    setEntries([...entries, { title: `Entry #${entries.length + 1}` }]);
  };
  return (
    <EntryContext.Provider value={{ data: entries, addEntries }}>
      {/* argument is going to be shown inside EntryProvider */}
      {children}
    </EntryContext.Provider>
  );
};

export default EntryContext;
