import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";
import { Context } from "../context/EntryContext";
import EntryForm from "../components/EntryForm";
const CreateScreen = ({ navigation }) => {
  const { addEntry } = useContext(Context);
  return <EntryForm />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
