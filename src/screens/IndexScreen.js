import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EntryContext from "../context/EntryContext";

const IndexScreen = () => {
  //grab props of context with hook, bind it
  const entries = useContext(EntryContext);
  return (
    <View>
      <FlatList
        //Array of objects
        data={entries}
        //Function called with every object in array, has to return
        //a string that gets used as a key
        keyExtractor={entry => entry.title}
        //called with argument that has a couple different properties
        //just need item so destructure
        renderItem={({ item }) => {
          return <Text>{item.title} </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
