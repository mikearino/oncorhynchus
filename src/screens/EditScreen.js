import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Context from "../context/EntryContext";
import { useState } from "react";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  //Find the entry and compoare it with the id of navigation.getParam,
  //then bind
  const entry = state.find(entry === navigation.getParam("id"));
  //Initial value for title/state is going to be ^ this entries' title.
  const [title, setTitle] = useState(entry.title);
  const [content, setContetn] = useState(entry.content);
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam("id")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
