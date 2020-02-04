//Any time you want to add a resource inside app, you just create a new
//"*&^%"Context.js file, create a reducer, create functions that modify
//reducer, then call createDataContext, pass in reducer, object with all
//different actions/default state. It gives back Context object and Provider
//which makes all data available to something inside the app.
import createDataContext from "../context/createDataContext";
//This is the file that we are going to make our Axios requests from.
import jsonServer from "../api/jsonServer";

//React knows to run reducer when dispatch is called
const entryReducer = (state, action) => {
  switch (action.type) {
    //Total source of truth, so no need to add it on to existing state.
    case "get_entries":
      return action.payload;
    case "edit_entry":
      //Map through all Entries. Once correct Id is found, return that one
      //with action.payload property. Else return entry.
      return state.map(entry => {
        return entry.id === action.payload.id ? action.payload : entry;
      });
    case "delete_entry":
      // Iterate through all of the different elements in an array and then
      // run a child element that will be passed in. If a true value is returned
      // Then the given element will be returned inside of a new overall array.
      // If a false value is returned, then it is going to be rejected.
      return state.filter(entry => entry.id !== action.payload);
    // case "add_entry":
    //   //Return new array with all current values of state and add new entry.
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content
    //     }
    //   ];
    default:
      return state;
  }
};
const getEntries = dispatch => {
  return async () => {
    //Will be concatenated with axios url EX:"http://a8..."
    const response = await jsonServer.get("/entries");
    //response.data === [{}, {}, {}, {}]
    //add in all data received from API. Then reducer captures
    //data and returns it.
    dispatch({ type: "get_entries", payload: response.data });
  };
};
//Pass in dispatch and then return it
const addEntry = dispatch => {
  //Passing in Title and Content from Create screen.
  return async (title, content, callback) => {
    //Post to entries, with title and content as an object.
    await jsonServer.post("/entries", { title, content });
    // dispatch({ type: "add_entry", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
//Receives id as an argument.
const deleteEntry = dispatch => {
  //Type="Thing to do", payload="id to delete."
  return async id => {
    await jsonServer.delete(`/entries/${id}`);
    dispatch({ type: "delete_entry", payload: id });
  };
};
const editEntry = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_entry", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  entryReducer,
  //Actions passed in.
  { addEntry, deleteEntry, editEntry, getEntries },
  []
);
