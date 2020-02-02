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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}               
                </Text>
                <TouchableOpacity onPress={() => deleteEntry(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

//Whenever screen is about to be displayed, react navigation will automatically
//call this function and inspect the object being returned. You can use it to
//customize a header or decide what is to be displayed if a user taps etc.
IndexScreen.navigationOptions = () => {
  return {
    headerRight: (
      <>
        <TouchableOpacity>
          <Feather name="plus" size={30} />
          <MaterialCommunityIcons
            style={styles.plusStyle}
            name="fish"
            size={36}
          />
        </TouchableOpacity>
      </>
    )
  };
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
  },
  plusStyle: {
    marginRight: 15,
    marginTop: 5
  }
});

export default IndexScreen;
