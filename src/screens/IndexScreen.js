import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/EntryContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  //grab props of context with hook, bind it
  const { state, addEntry, deleteEntry } = useContext(Context);
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
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}               
              </Text>
              <TouchableOpacity onPress={() => deleteEntry(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
