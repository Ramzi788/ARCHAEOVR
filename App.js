import React from "react";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/pages/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SelectScreen from "./src/pages/SelectScreen";
import ModelPage from "./src/pages/ModelPage";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Model" component={ModelPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
