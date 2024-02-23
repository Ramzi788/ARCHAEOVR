import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const MapBox = () => {
  // Define the initial region of the map
  const initialRegion = {
    latitude: 33.65881986409646,
    longitude: 35.55861865136266,
    latitudeDelta: 0.085, // Smaller value for a closer zoom
    longitudeDelta: 0.085, // Smaller value for a closer zoom
  };

  const hamadeh = {
    latitude: 33.67904518207783,
    longitude: 35.55896359053374,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
      >
        <Marker coordinate={hamadeh}></Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#D7D7D7",
    borderWidth: 0.5,
    height: 400,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapBox;
