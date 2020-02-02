import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
import { Provider } from "./src/context/EntryContext";
import ShowScreen from "./src/screens/ShowScreen";

//Create Navigator. It takes in two arguments.
const navigator = createStackNavigator(
  //First one is route configuration object which lists out all of the possible
  //screens a user can navigate to.
  {
    Index: IndexScreen,
    Show: ShowScreen
  },
  {
    //Second argument is configuration options, specifically for Stack Navigator.
    //Initial Route Name is for when the app spins up.
    initialRouteName: "Index",
    //Default Navigation Options sets the title inside of the header.
    defaultNavigationOptions: {
      title: "Entries"
    }
  }
);
//Passing in Stack Navigator to Create App Container
//Assign result to a variable
const App = createAppContainer(navigator);
//Rather than export createAppContainer, wrap it in custom component and export.
export default () => {
  return (
    //Passing in app as an arg to EntryProvider
    <Provider>
      <App />
    </Provider>
  );
};
