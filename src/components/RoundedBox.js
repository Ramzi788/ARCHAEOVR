import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const RoundedBox = ({ source,title}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <Image source={source} style={styles.image} />
      </View>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#D7D7D7",
    borderWidth: 0.5, // Set a borderWidth to see the border
    width: 151, // Set a default width or make it dynamic
    height: 97, // Set a default height or make it dynamic
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textStyle:{
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 0.7*16,
  },
  container: {
    flexDirection: "column"
  }
});

export default RoundedBox;
