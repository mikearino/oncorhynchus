import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/EntryContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  //Find the entry and compoare it with the id of navigation.getParam,
  //then bind
  const entry = state.find(entry => entry.id === navigation.getParam("id"));
  //Initial value for title/state is going to be ^ this entries' title.
  const [title, setTitle] = useState(entry.title);
  // const [content, setContent] = useState(entry.content);
  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
