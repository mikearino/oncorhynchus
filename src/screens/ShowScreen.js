import React from "react";
import { View, Text, Stylesheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

const ShowScreen = ({ navigate }) => {
  console.log(navigate.id);
  return (
    <View>
      <Text>{}</Text>
    </View>
  );
};

export default ShowScreen;
