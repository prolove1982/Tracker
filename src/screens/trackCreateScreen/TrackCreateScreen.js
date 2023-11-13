import React from "react";
import Map from "../../components/Map";
import { Text } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1> Create a Track </Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
