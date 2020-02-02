import React, { useContext } from "react";
import { View, Text, Stylesheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";
import { Context } from "../context/EntryContext";

const ShowScreen = ({ navigation }) => {
  //gives list of entries provided by context
  const { state } = useContext(Context);
  //find is a helper function, pass a function to it and it will call
  // with every function inside of the array. The first time true is returned
  //  take whatever entry is found and bind it.
  const entry = state.find(entry => entry.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{entry.title}</Text>
    </View>
  );
};

export default ShowScreen;
