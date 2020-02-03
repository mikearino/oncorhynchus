import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const EntryForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      {/*Value={title} shows current state, onChangeText passes text
      to setter.*/}
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      {/* Passing in title and content to addEntry. Then run a callback.*/}
      {/* Navigation.navigate is dealt with in EntryContext as well. */}
      <Button title="Add entry" />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default EntryForm;
