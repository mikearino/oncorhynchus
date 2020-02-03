import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/EntryContext";
import EntryForm from "../components/EntryForm";
const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  //Find the entry and compoare it with the id of navigation.getParam,
  //then bind
  const entry = state.find(entry => entry.id === navigation.getParam("id"));

  return <EntryForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
