import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import EntryContext from "../context/EntryContext";

const IndexScreen = () => {
  //grab props of context, bind it
  const value = useContext(EntryContext);
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
