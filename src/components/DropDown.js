import React, { estate, useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const data = [
  { label: "Al Hamadeh Palace", value: "1" },
  { label: "Moussa Castle", value: "2" },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const navigation = useNavigation();
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      showsVerticalScrollIndicator={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select site here"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
        navigation.navigate("Home");
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 5,
  },
  iconStyle: {
    paddingRight: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 20,
  },
});
