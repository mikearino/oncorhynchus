import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
//Create Navigator. It takes in two arguments. First one is route configuration
// object which lists out all of the possible screens a user can navigate to.
//The second one is
const navigator = createStackNavigator(
  {
    Index: IndexScreen
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
export default createAppContainer(navigator);
