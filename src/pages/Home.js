import React, { useEffect, useRef, useState } from "react";
import { GLView } from "expo-gl";
import { Renderer, loadAsync, THREE } from "expo-three";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";

import MapBox from "../components/MapBox";

import Swiper from "react-native-swiper";
import ImageViewer from "react-native-image-zoom-viewer";
import { useNavigation, useRoute } from "@react-navigation/native";

const openGoogleMaps = () => {
  Linking.openURL("https://maps.app.goo.gl/8Q9UYGoMhPz8XzBx8").catch((err) =>
    console.error("An error occurred", err)
  );
};
export default function Home({ navigation }) {
  const images = [
    {
      url: Image.resolveAssetSource(require("../assets/hamadeh-palace.jpeg"))
        .uri,
    },
    {
      url: Image.resolveAssetSource(require("../assets/ahpic.config.jpeg")).uri,
    },
    { url: Image.resolveAssetSource(require("../assets/ahinterior.png")).uri },
    { url: Image.resolveAssetSource(require("../assets/hamadeh2.jpeg")).uri },
  ];
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalVisible(true);
  };
  const [siteDetails, setSiteDetails] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const route = useRoute();
  const { siteDetails: selectedSiteDetails } = route.params ?? {};
  useEffect(() => {
    const fetchSiteDetails = async () => {
      if (!selectedSiteDetails?.label) {
        console.log("Label is undefined.");
        return;
      }
      console.log(`Fetching details for label: ${selectedSiteDetails.label}`);
      try {
        const response = await fetch(
          `http://192.168.1.126:5002/api/siteDetails/${encodeURIComponent(
            selectedSiteDetails.label
          )}`
        );
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`Failed to fetch, status code: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setSiteDetails(data);
      } catch (error) {
        console.error("Error fetching site details:", error);
      }
    };

    if (selectedSiteDetails?.label) {
      fetchSiteDetails();
    }
  }, [selectedSiteDetails?.label]);

  if (!siteDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const openGoogleMaps = () => {
    Linking.openURL("https://maps.app.goo.gl/8Q9UYGoMhPz8XzBx8").catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        dotColor="#FFDAA2"
        activeDotColor="#CA984D"
        activeDotStyle={{ width: 15 }}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            onPress={() => openModal(index)}
            style={{ flex: 1 }}
          >
            <Image source={{ uri: image.url }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </Swiper>

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageViewer
          imageUrls={images}
          index={currentImageIndex}
          onSwipeDown={() => setModalVisible(false)}
          enableSwipeDown={true}
          enableImageZoom={true}
          saveToLocalByLongPress={false}
        />
      </Modal>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.titles}>
            <Text style={styles.title1}>Al Hamadeh Palace</Text>
            <Text style={styles.title2}>Baakline, Chouf Lebanon</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Select")}
          >
            <Text style={styles.buttonText}>Start Tour</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "90%", marginRight: 20, marginLeft: 20 }}>
          <TouchableOpacity
            style={styles.modelButton}
            onPress={() => navigation.navigate("Model")}
          >
            <Text style={styles.buttonText}>3d Model</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ borderWidth: 0.5, borderColor: "#DADADA", marginTop: 30 }}
        ></View>

        <ScrollView
          style={styles.scroller}
          showsVerticalScrollIndicator={false}
        >
          {/* <Text>Site Name: {siteDetails?.name}</Text> */}
          <Text style={styles.description}>{siteDetails?.description}</Text>
          {/* <Text style={styles.description}>
            Inside the palace, visitors will find a room bearing pictures of
            members of the Hamada family who held the position of spiritual
            leader of the Druze community, rooms containing antiquities, living
            rooms and much more. The first stone of the Hamada Palace was laid
            in the year 1604, and the palace is located in a property consisting
            of several houses, all of which belong to the same family, the Druze
            Hamada family. Inside the palace, visitors will find a room bearing
            pictures of members of the Hamada family who held the position of
            spiritual leader of the Druze community, rooms containing
            antiquities, living rooms and much more.The first stone of the
            Hamada Palace was laid in the year 1604, and the palace is located
            in a property consisting of several houses, all of which belong to
            the same family, the Druze Hamada family. Inside the palace,
            visitors will find a room bearing pictures of members of the Hamada
            family who held the position of spiritual leader of the Druze
            community, rooms containing antiquities, living rooms and much more.
          </Text>
          <Text style={styles.description}>
            The first stone of the Hamada Palace was laid in the year 1604, and
            the palace is located in a property consisting of several houses,
            all of which belong to the same family, the Druze Hamada family.
            Inside the palace, visitors will find a room bearing pictures of
            members of the Hamada family who held the position of spiritual
            leader of the Druze community, rooms containing antiquities, living
            rooms and much more. The first stone of the Hamada Palace was laid
            in the year 1604, and the palace is located in a property consisting
            of several houses, all of which belong to the same family, the Druze
            Hamada family. Inside the palace, visitors will find a room bearing
            pictures of members of the Hamada family who held the position of
            spiritual leader of the Druze community, rooms containing
            antiquities, living rooms and much more.The first stone of the
            Hamada Palace was laid in the year 1604, and the palace is located
            in a property consisting of several houses, all of which belong to
            the same family, the Druze Hamada family. Inside the palace,
            visitors will find a room bearing pictures of members of the Hamada
            family who held the position of spiritual leader of the Druze
            community, rooms containing antiquities, living rooms and much more.
          </Text> */}
          <Text style={styles.location}>Location</Text>
          <View style={styles.locationSection}>
            <View style={styles.textContainer}>
              <Text style={styles.locationTitle}>
                MHH5+HFC, Baakleen, Lebanon
              </Text>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => openGoogleMaps(33.8938, 35.5018)}
              >
                <Text style={styles.mapButton}>Open in Maps</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mapContainer}>
              <MapBox />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  content: {
    flex: 2,
  },
  openButton: {
    backgroundColor: "#CA984D",
    borderRadius: 5,
    height: 25,
    paddingLeft: 10,
    justifyContent: "center",
  },
  locationTitle: {
    color: "#9F9F9F",
    fontSize: 12,
    marginBottom: 15,
  },
  mapButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  modelButton: {
    borderRadius: 5,
    backgroundColor: "black",
    padding: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  locationSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  textContainer: {
    flex: 2,
    marginRight: 10, // Add some margin to the right of the text
  },

  mapContainer: {
    flex: 2.5,
    height: 197,
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    height: 290,
    width: "100%",
  },
  scroller: {
    margin: 20,
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
  },
  location: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 50,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title2: {
    fontSize: 12,
    color: "#9C9C9C",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titles: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#CA984D",
    padding: 10,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
