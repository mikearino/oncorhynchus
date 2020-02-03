import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/EntryContext";
import EntryForm from "../components/EntryForm";
const EditScreen = ({ navigation }) => {
  const { state, editEntry } = useContext(Context);
  //Find the entry and compare it with the id of navigation.getParam,
  //then bind to entry
  const id = navigation.getParam("id");
  const entry = state.find(entry => entry.id === id);
  return (
    <EntryForm
      //InitialValues is going to pass in an object from the found and bound
      //variable entry. Entry form will receive the initial values.
      initialValues={{ title: entry.title, content: entry.content }}
      onSubmit={(title, content) => {
        //Passing in id to editEntry which gets sent to Context.
        //Navigation.pop() pops off the current view and returns to
        //previous screen.
        editEntry(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
