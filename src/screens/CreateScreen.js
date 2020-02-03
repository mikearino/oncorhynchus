import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";
import { Context } from "../context/EntryContext";
import EntryForm from "../components/EntryForm";

const CreateScreen = ({ navigation }) => {
  const { addEntry } = useContext(Context);
  //Prop for callback can be called anything. Any time user submits
  //form, invoke this onSubmit, passing in title and content.
  return (
    <EntryForm
      onSubmit={(title, content) => {
        //Pass in title, content, and callback for navigation that was
        //provided to the callback function.
        addEntry(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
