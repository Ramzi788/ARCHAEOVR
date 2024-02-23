import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DropdownComponent from "../components/DropDown";

export default function SelectScreen() {
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select Your Desired <Text style={styles.span}>Site</Text> Below
      </Text>
      <View style={styles.select}>
        <DropdownComponent />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "left",
  },
  span: {
    fontSize: 36,
    fontWeight: "bold",
    marginHorizontal: 20,
    color: "#CA984D",
  },
  picker: {
    height: 50,
    width: 200,
    borderColor: "black",
  },
  select: {
    width: "80%",
    marginTop: 20,
  },
});
