import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RoundedBox from "../components/RoundedBox";
import LargeRoundedBox from "../components/LargeRoundedBox";

export default function Home() {
  const favoritePlaces = [
    <RoundedBox
      key={"p1"}
      source={{
        uri: "./assets/Moussa-Castle.png",
      }}
      title={"Moussa Castle"}
    />,
    <RoundedBox
      key={"p2"}
      source={{
        uri: "./assets/Moussa-Castle.png",
      }}
      title={"Moussa Castle"}
    />,
    <RoundedBox
      key={"p3"}
      source={{
        uri: "./assets/Moussa-Castle.png",
      }}
      title={"Moussa Castle"}
    />,
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>Welcome,</Text>
            <Text style={styles.headerText}>Ramzi Zeineddine!</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="hand-wave"
              size={iconSize}
              color="#FFBF00"
              style={styles.iconStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.firstRow}>
          <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
            Your Favorite Places in Chouf
          </Text>
          <ScrollView
            horizontal="true"
            style={styles.boxScroll}
            showsHorizontalScrollIndicator={false}
          >
            {favoritePlaces.map((roundedBox, index) => (
              <View key={index} style={styles.roundedBoxContainer}>
                {roundedBox}
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.secondRow}>
          <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
            Discover New Sites in Chouf
          </Text>
          <LargeRoundedBox/>

        </View>
      </View>
    </View>
  );
}
const baseUnit = 16;
const iconSize = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  header: {
    backgroundColor: "#00A59B",
  },
  headerContent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 1.2 * baseUnit,
    lineHeight: 30,
  },
  center: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    padding: 1.5*baseUnit,
  },
  firstRow: {
    flexDirection: "column",
    paddingTop: 1.5 * baseUnit,
  },
  roundedBoxContainer: {
    paddingRight: 1.2*baseUnit,
  },
  secondRow: {
    marginTop: 2*baseUnit,
  },
});
