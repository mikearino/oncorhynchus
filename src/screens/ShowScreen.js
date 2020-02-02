import React, { useContext } from "react";
import { View, Text, Stylesheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";
import { Context } from "../context/EntryContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  //Gives list of entries provided by context.
  const { state } = useContext(Context);
  //Find is a helper method, pass a function to it and it will call
  //with every function inside of the array. The first time true is returned
  //take whatever entry is found and bind it.
  const entry = state.find(entry => entry.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{entry.title}</Text>
      <Text>{entry.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    //Add in an edit button to top right.
    headerRight: (
      //Pass in navigation with entry id from navigation object.
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

export default ShowScreen;
