//Any time you want to add a resource inside app, you just create a new
//---Context.js file, create a reducer, create functions that modify
//reducer, then call createDataContext, pass in reducer, object with all
//different actions/default state. It gives back Context object and Provider
//which makes all data available to something inside the app
import createDataContext from "../context/createDataContext";

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

const addEntry = () => {
  dispatch({ type: "add_entry" });
};

export const { Context, Provider } = createDataContext(
  entryReducer,
  { addEntry },
  []
);
