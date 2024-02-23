import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function SplashScreen() {
  
  const navigation = useNavigation();
  return (
    <ImageBackground source={require("../assets/background.png")}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.header}>ArchaeoVR</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Discover</Text>
          <Text style={styles.bottomText2}>
            Historical Sites in the Chouf Region
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Select")}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    marginBottom: 400,
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  bottom: {
    marginBottom: 70,
    width: "80%",
  },
  bottomText: {
    color: "white",
    fontSize: 25,
  },
  bottomText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#CA984D",
    padding: 12,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
