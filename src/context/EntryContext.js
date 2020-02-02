//Any time you want to add a resource inside app, you just create a new
//"*&^%"Context.js file, create a reducer, create functions that modify
//reducer, then call createDataContext, pass in reducer, object with all
//different actions/default state. It gives back Context object and Provider
//which makes all data available to something inside the app
import createDataContext from "../context/createDataContext";

//React knows to run reducer when dispatch is called
const entryReducer = (state, action) => {
  switch (action.type) {
    case "delete_entry":
      // iterate through all of the different elements in an array and then
      // run a child element that will be passed in. If a true value is returned
      // Then the given element will be returned inside of a new overall array.
      // If a false value is returned, then it is going to be rejected.
      return state.filter(entry => entry.id !== action.payload);
    case "add_entry":
      //return new array with all current values of state and add new entry
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};
//Receives id as an argument.
const deleteEntry = dispatch => {
  //type="Thing to do", payload="id to delete"
  return id => {
    dispatch({ type: "delete_entry", payload: id });
  };
};
//Pass in dispatch and then return it
const addEntry = dispatch => {
  //Passing in Title and Content from Create screen
  return (title, content, callback) => {
    dispatch({ type: "add_entry", payload: { title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  entryReducer,
  { addEntry, deleteEntry },
  []
);
