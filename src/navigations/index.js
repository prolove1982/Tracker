import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { TrackerProvider } from "../context/reducers/TrackerContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TrackerProvider>
          <AuthNavigator />
        </TrackerProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppContainer;
