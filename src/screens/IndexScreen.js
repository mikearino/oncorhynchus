import React, { useContext, useEffect } from "react";
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
  const { state, deleteEntry, getEntries } = useContext(Context);
  //Component will only render this piece of code once. So it is
  //imperative to run API calls like this.
  useEffect(() => {
    getEntries();
    //Upon return to this screen, run getEntries again. Add listener
    //should be cleaned up.
    navigation.addListener("didFocus", () => {
      getEntries();
    });
    //You need to add this because if not you get a memory leak.
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
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

//Whenever screen is about to be displayed, react navigation automatically calls
//this function and inspects the object being returned. Use it to customize
//a header or decide what is to be displayed if a user taps etc.
//It is also going to be called with the same navigation prop just like
//IndexScreen
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <>
        <TouchableOpacity
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Create")}
        >
          <Feather style={styles.plusStyle} name="plus" size={30} />
          <MaterialCommunityIcons
            style={styles.fishStyle}
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
  fishStyle: {
    marginRight: 10,
    marginBottom: 10
  },
  plusStyle: {
    left: 5,
    marginTop: 1
  },
  iconLayout: {
    flexDirection: "row"
  }
});

export default IndexScreen;
