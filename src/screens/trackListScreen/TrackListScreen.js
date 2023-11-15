import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Button
        style={{ marginTop: 35, marginHorizontal: 15 }}
        title="Go to Track Details Screen"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
};

export default TrackListScreen;
