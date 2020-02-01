import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/EntryContext";

const IndexScreen = () => {
  //grab props of context with hook, bind it
  const { state, addEntry } = useContext(Context);
  return (
    <View>
      {/* Callback for addEntries which runs state hook */}
      <Button title="Add entry" onPress={addEntry} />
      <FlatList
        //list of entries
        data={state}
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
