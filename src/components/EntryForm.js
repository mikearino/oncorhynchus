import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const EntryForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
      {/* Passing in title and content to addEntry. Then run a callback
      onSubmit with title and content state variables passed in.*/}

      <Button title="Add entry" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

//defaultProps property can be used to give component some default property
//values. If this component is shown without props, then this object will fill
//in some default values. React automatically checks to see if the component
//has this default property on it.
EntryForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
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
